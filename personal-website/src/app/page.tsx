import Navbar from '@/components/Navbar';
import IntroCard from '@/components/IntroCard';
import PhotoCard from '@/components/PhotoCard';
import FallingFlowers from '@/components/FallingFlowers';
import FixedFlower from '@/components/FixedFlower';

export default function Home() {
  return (
    <div className="min-h-screen relative flex" style={{ backgroundColor: '#fcfaf6' }}>
      {/* 左侧导航栏（已向右移动 64px） */}
      <div className="w-80 flex-shrink-0">
        <Navbar />
      </div>

      {/* 顶部飘落的五朵花 */}
      <FallingFlowers />

      {/* 右下角固定旋转的花 */}
      <FixedFlower />

      {/* 主内容区域 - 下移3cm(113px) */}
      <main className="flex-1 min-h-screen flex items-start justify-center p-12" style={{ paddingTop: '161px' }}>
        <div className="max-w-5xl w-full">
          {/* 两个卡片横向并排，顶部对齐 */}
          <div className="flex gap-8 items-start justify-center">
            {/* 自我介绍卡片 */}
            <div className="flex-1 max-w-md">
              <IntroCard />
            </div>

            {/* 照片卡片 */}
            <div className="flex-shrink-0">
              <PhotoCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
