'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function PhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="w-64 -mt-10"
      style={{ fontFamily: 'Virgil, Patrick Hand, cursive' }}
    >
      {/* 照片容器 */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <Image
          src="/profile.jpg"
          alt="Lucky's photo"
          fill
          className="object-cover opacity-85"
          priority
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* 社交媒体链接 */}
      <SocialLinks />
    </motion.div>
  );
}

