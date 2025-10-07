import NavbarMarket from '@/components/NavbarMarket';
import FixedFlower from '@/components/FixedFlower';
import { AnimatedTimeline, TimelineEvent } from '@/components/AnimatedTimeline';
import Image from 'next/image';
import { getMarketReview } from '@/lib/notion';

export const dynamic = 'force-dynamic';

export default async function MarketReview() {
  // 获取Notion数据
  const notionEvents = await getMarketReview();
  
  // 默认数据作为后备
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "October 06, 2025",
      title: "Chinese Stocks Rebound",
      description: "Observed a significant rebound in Chinese stocks with improved market sentiment. Need to monitor policy changes and volume confirmation in the coming days."
    },
    {
      id: "2",
      date: "September 15, 2025",
      title: "US Treasury Yield Watch",
      description: "Treasury yields continue to rise, impacting global asset pricing. Closely watching Fed policy signals and inflation data for directional cues."
    },
    {
      id: "3",
      date: "August 02, 2025",
      title: "Trading Rhythm & Patience",
      description: "Market rhythm is crucial. Not every day requires trading. Learning to wait for the right opportunities while maintaining discipline and patience."
    },
    {
      id: "4",
      date: "July 18, 2025",
      title: "Market Volatility Analysis",
      description: "Analyzing recent market volatility patterns and their implications for risk management strategies. Focus on diversification and position sizing."
    },
    {
      id: "5",
      date: "June 25, 2025",
      title: "Tech Sector Outlook",
      description: "Evaluating technology sector performance and growth potential. Monitoring key indicators including innovation cycles and valuation metrics."
    },
    {
      id: "6",
      date: "June 10, 2025",
      title: "Commodity Price Trends",
      description: "Tracking commodity price movements and their impact on inflation expectations. Special attention to energy and agricultural markets."
    }
  ];

  const timelineEvents = notionEvents.length > 0 ? notionEvents : defaultEvents;

  return (
    <div className="min-h-screen relative flex" style={{ backgroundColor: '#fcfaf6' }}>
      {/* 左侧导航栏 - 使用Market专用导航 */}
      <div className="w-80 flex-shrink-0">
        <NavbarMarket />
      </div>

      {/* 左上角 PinkCloud 图片 */}
      <div className="fixed z-20" style={{ top: '32px', left: '24px' }}>
        <Image
          src="/PinkCloud.svg"
          alt="Pink Cloud"
          width={100}
          height={100}
          className="opacity-90"
        />
      </div>

      {/* 右下角固定旋转的花 */}
      <FixedFlower />

      {/* 主内容区域 */}
      <main className="flex-1 min-h-screen flex items-start p-12" style={{ paddingTop: '85px', paddingLeft: '40px' }}>
        <div className="max-w-3xl w-full">
          {/* 动效时间线 */}
          <AnimatedTimeline
            events={timelineEvents}
            className="max-w-2xl"
            styles={{
              lineColor: '#d1d5db',
              activeLineColor: '#8B7355',
              dotColor: '#d1d5db',
              activeDotColor: '#8B7355',
              dotSize: '1.5rem',
              titleColor: '#333333',
              descriptionColor: '#555555',
              dateColor: '#8B7355',
            }}
          />

          {/* 添加提示文字 */}
          <div 
            className="text-center mt-12 text-sm text-[#999999] opacity-60"
            style={{ fontFamily: 'var(--font-kalam), Kalam, cursive' }}
          >
            More thoughts coming soon...
          </div>
        </div>
      </main>
    </div>
  );
}
