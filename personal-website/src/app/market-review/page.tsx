'use client';

import NavbarMarket from '@/components/NavbarMarket';
import FixedFlower from '@/components/FixedFlower';
import FallingFlowers from '@/components/FallingFlowers';
import { AnimatedTimeline, TimelineEvent } from '@/components/AnimatedTimeline';
import Image from 'next/image';

export default function MarketReview() {
  const timelineEvents: TimelineEvent[] = [
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

      {/* 顶部飘落的五朵花 */}
      <FallingFlowers />

      {/* 右下角固定旋转的花 */}
      <FixedFlower />

      {/* 主内容区域 */}
      <main className="flex-1 min-h-screen flex items-start p-12" style={{ paddingTop: '161px', paddingLeft: '40px' }}>
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
            customEventRender={(event) => {
              // 彩色主题数组（仅用于日期颜色）
              const colorThemes = [
                { dot: '#8ca0a0', bg: '#a5d8ff' },
                { dot: '#d8b4a0', bg: '#ffc9c9' },
                { dot: '#6f7c58', bg: '#b2f2bb' },
                { dot: '#9eb4b3', bg: '#d0bfff' },
              ];
              const eventIndex = parseInt(event.id) - 1;
              const theme = colorThemes[eventIndex % colorThemes.length];
              
              return (
                <div 
                  className="p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  style={{ 
                    backgroundColor: '#FEFDFB',
                  }}
                >
                  {/* 日期 */}
                  <div 
                    className="text-sm mb-3"
                    style={{ 
                      fontFamily: 'var(--font-kalam), Kalam, cursive',
                      color: theme.dot
                    }}
                  >
                    {event.date}
                  </div>
                  
                  {/* 标题 */}
                  <h3 
                    className="text-xl font-bold mb-3 text-[#333333]"
                    style={{ fontFamily: 'var(--font-kalam), Kalam, cursive' }}
                  >
                    {event.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p 
                    className="text-base leading-relaxed text-[#555555]"
                    style={{ fontFamily: 'var(--font-kalam), Kalam, cursive' }}
                  >
                    {event.description}
                  </p>
                </div>
              );
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

