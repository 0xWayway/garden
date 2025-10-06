import NavbarMarket from '@/components/NavbarMarket';
import FixedFlower from '@/components/FixedFlower';
import FallingFlowers from '@/components/FallingFlowers';
import Image from 'next/image';

export default function RecentThoughts() {
  const sections = [
    {
      title: "what am I reading",
      items: [
        '"How to Tell a Story"',
        '"Gospel of Wealth"'
      ]
    },
    {
      title: "what am I listening",
      items: [
        "Chill LoFi playlist",
        "Acoustic cafe sessions"
      ]
    },
    {
      title: "what I am interesting but didn't do yet",
      items: [
        "Writing weekly reflections",
        "Building a mini dashboard for market notes"
      ]
    },
    {
      title: "others",
      items: [
        "A note about climbing motivation",
        "Bread baking experiment"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative flex" style={{ backgroundColor: '#fcfaf6' }}>
      {/* 左侧导航栏 */}
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
      <main className="flex-1 min-h-screen flex items-start justify-center p-12" style={{ paddingTop: '161px' }}>
        <div className="max-w-3xl w-full">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fadeIn"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* 分区标题 */}
                <h2 
                  className="text-2xl font-bold mb-4 text-[#333333]"
                  style={{ fontFamily: 'var(--font-kalam), Kalam, cursive' }}
                >
                  {section.title}
                </h2>
                
                {/* 列表项 */}
                <ul className="space-y-2 ml-4">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="text-lg text-[#333333] leading-relaxed"
                      style={{ fontFamily: 'var(--font-kalam), Kalam, cursive' }}
                    >
                      <span className="text-[#8B7355] mr-2">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

