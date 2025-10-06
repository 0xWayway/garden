'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="p-4 w-64"
      style={{ fontFamily: 'Virgil, Patrick Hand, cursive' }}
    >
      {/* 照片容器 */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Lucky's photo"
          fill
          className="object-cover opacity-85"
          priority
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
    </motion.div>
  );
}

