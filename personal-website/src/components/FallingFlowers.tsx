'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// 使用本地 public 文件夹中的 5 朵花 SVG 文件
const flowerImages = [
  '/flower1.svg',
  '/flower2.svg',
  '/flower3.svg',
  '/flower4.svg',
  '/flower5.svg',
];

interface Flower {
  id: number;
  image: string;
  startX: number;
  duration: number;
  delay: number;
  rotation: number;
}

export default function FallingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    // 为每朵花生成随机参数
    const generatedFlowers: Flower[] = flowerImages.map((image, index) => ({
      id: index,
      image,
      startX: Math.random() * 80 + 10, // 10-90% 的水平位置
      duration: Math.random() * 3 + 5, // 5-8 秒飘落时间
      delay: Math.random() * 2, // 0-2 秒延迟
      rotation: Math.random() * 720 - 360, // -360 到 360 度旋转
    }));
    setFlowers(generatedFlowers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {flowers.map((flower) => (
        <motion.img
          key={flower.id}
          src={flower.image}
          alt="falling flower"
          className="absolute w-16 h-16"
          initial={{
            top: -50,
            left: `${flower.startX}%`,
            rotate: 0,
            opacity: 0.7,
          }}
          animate={{
            top: ['0vh', '12vh', '12vh'],
            rotate: [0, flower.rotation, flower.rotation],
            opacity: [0.7, 0.7, 0],
          }}
          transition={{
            duration: flower.duration + 2,
            delay: flower.delay,
            ease: 'easeInOut',
            times: [0, 0.6, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </div>
  );
}

