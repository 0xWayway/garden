import { Client } from '@notionhq/client';

// 初始化Notion客户端
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Database IDs
export const DATABASES = {
  siteConfig: process.env.NOTION_DATABASE_SITE_CONFIG || '',
  socialLinks: process.env.NOTION_DATABASE_SOCIAL_LINKS || '',
  recentThoughts: process.env.NOTION_DATABASE_RECENT_THOUGHTS || '',
  marketReview: process.env.NOTION_DATABASE_MARKET_REVIEW || '',
};

type QueryDatabaseOptions = {
  filter?: Record<string, unknown>;
  sorts?: Array<Record<string, unknown>>;
};

const getTextFromRichText = (segments: Array<{ plain_text: string }> | undefined) => {
  if (!segments || segments.length === 0) {
    return '';
  }

  return segments.map((segment) => segment.plain_text).join('').trim();
};

const getTextFromTitle = (segments: Array<{ plain_text: string }> | undefined) => {
  if (!segments || segments.length === 0) {
    return '';
  }

  return segments.map((segment) => segment.plain_text).join('').trim();
};

async function queryDatabase(
  databaseId: string,
  { filter, sorts }: QueryDatabaseOptions = {}
) {
  if (!databaseId) {
    console.warn('Missing database ID when querying Notion');
    return [] as any[];
  }

  try {
    // 使用 search API 来查找数据库中的页面
    const response = await notion.search({
      filter: {
        property: 'object',
        value: 'page'
      }
    });

    // 过滤出属于指定数据库的页面
    const pages = response.results.filter((page: any) => 
      (page.parent?.database_id === databaseId || 
       page.parent?.data_source_id) && 
      page.object === 'page' && 
      'properties' in page
    );

    return pages;
  } catch (error) {
    console.error(`Error querying Notion database ${databaseId}:`, error);
    return [] as any[];
  }
}

// 获取网站配置（自我介绍、照片URL）
export async function getSiteConfig() {
  const pages = await queryDatabase(DATABASES.siteConfig);

  const config: Record<string, string> = {};

  pages.forEach((page: any) => {
    const key = getTextFromTitle(page.properties?.Key?.title);
    const value = getTextFromRichText(page.properties?.Value?.rich_text);
    if (key) {
      const normalizedKey = key.trim().toLowerCase();
      config[normalizedKey] = value.trim();
    }
  });

  return config;
}

// 获取社交媒体链接
export async function getSocialLinks() {
  const pages = await queryDatabase(DATABASES.socialLinks, {
    sorts: [
      {
        property: 'Order',
        direction: 'ascending',
      },
    ],
  });

  return pages
    .map((page: any) => ({
      platform: page.properties?.Platform?.select?.name?.trim() || '',
      url: page.properties?.URL?.url?.trim() || '',
      order: page.properties?.Order?.number || 0,
    }))
    .filter((link) => link.platform && link.url)
    .sort((a, b) => a.order - b.order);
}

// 获取Recent Thoughts
export async function getRecentThoughts() {
  const pages = await queryDatabase(DATABASES.recentThoughts, {
    sorts: [
      {
        property: 'Order',
        direction: 'ascending',
      },
    ],
  });

  return pages
    .map((page: any) => {
      const category = getTextFromTitle(page.properties?.Category?.title);
      const itemsText = getTextFromRichText(page.properties?.Items?.rich_text);
      const items = itemsText
        .split('\n')
        .map((item: string) => item.trim())
        .filter((item: string) => item.length > 0);

      return {
        title: category,
        items,
        order: page.properties?.Order?.number || 0,
      };
    })
    .sort((a, b) => a.order - b.order);
}

// 获取Market Review时间轴
export async function getMarketReview() {
  const pages = await queryDatabase(DATABASES.marketReview, {
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  const toTimestamp = (value: string) => {
    const time = value ? new Date(value).getTime() : NaN;
    return Number.isNaN(time) ? 0 : time;
  };

  return pages
    .map((page: any) => {
      const date = page.properties?.Date?.date?.start || '';
      const title = getTextFromTitle(page.properties?.Title?.title);
      const description = getTextFromRichText(page.properties?.Description?.rich_text);

      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          })
        : '';

      return {
        id: page.id,
        date: formattedDate,
        rawDate: date,
        title,
        description,
      };
    })
    .filter(item => item.title && item.description) // 过滤掉空数据
    .sort((a, b) => toTimestamp(b.rawDate || '') - toTimestamp(a.rawDate || ''));
}

export default notion;
