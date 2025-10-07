// 调试 Notion API 连接
const fs = require('fs');
const path = require('path');

// 手动读取 .env.local 文件
function loadEnvFile() {
  const envPath = path.join(__dirname, '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
  }
}

loadEnvFile();

async function debugNotion() {
  console.log('🔍 调试 Notion API 连接...');
  console.log('API Key:', process.env.NOTION_API_KEY ? '✅ 已设置' : '❌ 未设置');
  
  try {
    const { Client } = await import('@notionhq/client');
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    console.log('\n📊 测试 Notion 搜索 API...');
    const searchResponse = await notion.search({
      filter: {
        property: 'object',
        value: 'page'
      },
      page_size: 10
    });

    console.log('✅ 搜索成功，找到页面数:', searchResponse.results.length);
    
    if (searchResponse.results.length > 0) {
      console.log('\n📋 前3个页面信息:');
      searchResponse.results.slice(0, 3).forEach((page, index) => {
        console.log(`\n页面 ${index + 1}:`);
        console.log('  ID:', page.id);
        console.log('  Object:', page.object);
        console.log('  Parent Type:', page.parent?.type);
        console.log('  Parent Database ID:', page.parent?.database_id);
        console.log('  Parent Data Source ID:', page.parent?.data_source_id);
        
        if ('properties' in page && page.properties) {
          console.log('  Properties:', Object.keys(page.properties));
        }
      });
    }

    // 测试特定数据库
    console.log('\n🎯 测试特定数据库...');
    const databases = {
      siteConfig: process.env.NOTION_DATABASE_SITE_CONFIG,
      socialLinks: process.env.NOTION_DATABASE_SOCIAL_LINKS,
      recentThoughts: process.env.NOTION_DATABASE_RECENT_THOUGHTS,
      marketReview: process.env.NOTION_DATABASE_MARKET_REVIEW,
    };

    for (const [name, dbId] of Object.entries(databases)) {
      if (dbId) {
        const matchingPages = searchResponse.results.filter(page => 
          page.parent?.database_id === dbId || page.parent?.data_source_id === dbId
        );
        console.log(`  ${name}: ${matchingPages.length} 个页面 (DB ID: ${dbId})`);
      } else {
        console.log(`  ${name}: ❌ 未设置数据库ID`);
      }
    }

  } catch (error) {
    console.error('❌ 调试失败:', error.message);
    console.error('错误详情:', error);
  }
}

debugNotion();
