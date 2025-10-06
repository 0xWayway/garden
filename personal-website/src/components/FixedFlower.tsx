'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FixedFlower() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 360,
      }}
      transition={{
        opacity: { duration: 1, ease: 'easeOut' },
        scale: { duration: 1, ease: 'easeOut' },
        rotate: { 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear' 
        },
      }}
      className="fixed bottom-8 right-8 z-20 pointer-events-none"
    >
      <div className="relative w-24 h-24">
        <Image
          src="/flower-fixed.jpg"
          alt="decorative flower"
          fill
          className="object-contain opacity-80"
        />
      </div>
    </motion.div>
  );
}

