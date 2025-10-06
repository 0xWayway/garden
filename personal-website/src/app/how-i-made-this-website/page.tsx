'use client';

import FallingFlowers from '@/components/FallingFlowers';
import FixedFlower from '@/components/FixedFlower';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function HowIMadeThisWebsite() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.5, scale + delta), 3);
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#fcfaf6' }}>
      {/* 返回按钮 */}
      <BackButton />

      {/* 顶部飘落的五朵花 */}
      <FallingFlowers />

      {/* 右下角固定旋转的花 */}
      <FixedFlower />

      {/* 主内容区域 */}
      <main 
        className="min-h-screen flex items-center justify-center p-12 overflow-hidden"
        onWheel={handleWheel}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={containerRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-6xl"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
          onMouseDown={handleMouseDown}
        >
          {/* SVG 图片 */}
          <img
            src="/draft.svg"
            alt="How I made this website"
            className="w-full h-auto select-none"
            draggable={false}
          />
        </motion.div>
      </main>

      {/* 操作提示 */}
      <div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#333',
          fontFamily: 'Virgil, Patrick Hand, cursive',
          border: '1px solid #ccc',
        }}
      >
        🖱️ Drag to move • 🔍 Scroll to zoom
      </div>
    </div>
  );
}

