import Navbar from '@/components/Navbar';
import IntroCard from '@/components/IntroCard';
import PhotoCard from '@/components/PhotoCard';
import FallingFlowers from '@/components/FallingFlowers';
import FixedFlower from '@/components/FixedFlower';
import Image from 'next/image';
import { getSiteConfig, getSocialLinks } from '@/lib/notion';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // 获取Notion数据
  const [siteConfig, socialLinks] = await Promise.all([
    getSiteConfig(),
    getSocialLinks(),
  ]);

  const introText = siteConfig.intro || '';
  const photoUrl = siteConfig.photo_url || '';
  return (
    <div className="min-h-screen relative flex" style={{ backgroundColor: '#fcfaf6' }}>
      {/* 左侧导航栏（已向右移动 64px） */}
      <div className="w-80 flex-shrink-0">
        <Navbar />
      </div>

      {/* 左上角 PinkCloud 图片 */}
      <div className="fixed z-20" style={{ top: '32px', left: '32px' }}>
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

      {/* 左下角岩点图片 */}
      <div className="fixed z-10" style={{ bottom: '108px', left: '127px' }}>
        <Image
          src="/Rock.svg"
          alt="Rock"
          width={180}
          height={180}
          className="opacity-80"
        />
      </div>

      {/* 主内容区域 - 下移3cm(113px) */}
      <main className="flex-1 min-h-screen flex items-start justify-center p-12" style={{ paddingTop: '161px' }}>
        <div className="max-w-5xl w-full relative">
          {/* 两个卡片横向并排，顶部对齐 */}
          <div className="flex gap-8 items-start justify-center">
            {/* 自我介绍卡片 */}
            <div className="flex-1 max-w-md">
              <IntroCard introText={introText} />
            </div>

            {/* 照片卡片 */}
            <div className="flex-shrink-0">
              <PhotoCard photoUrl={photoUrl} socialLinks={socialLinks} />
            </div>
          </div>

          {/* 虚线箭头 - 从"Let's Catch up"指向照片下方社交媒体链接 */}
          <svg
            className="absolute pointer-events-none"
            style={{
              left: '38%',
              top: '260px',
              width: '240px',
              height: '140px',
              opacity: 0.6,
            }}
            viewBox="0 0 240 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 手绘风格的曲线路径 - 从"Let's Catch up"向右下弯曲，指向照片下方 */}
            <path
              d="M 10 15 Q 60 30, 120 70 Q 180 110, 220 125"
              stroke="#8B7355"
              strokeWidth="2.5"
              strokeDasharray="8 10"
              strokeLinecap="round"
              fill="none"
            />
            {/* 箭头头部 - 指向右下 */}
            <path
              d="M 220 125 L 210 121 M 220 125 L 216 116"
              stroke="#8B7355"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </main>
    </div>
  );
}
