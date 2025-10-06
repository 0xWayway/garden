'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-8 left-8 z-30"
    >
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:opacity-70"
        style={{
          backgroundColor: 'rgba(255, 252, 249, 0.9)',
          border: '1.5px solid #333333',
          fontFamily: 'Virgil, Patrick Hand, cursive',
          color: '#333333',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        <span style={{ fontSize: '18px' }}>←</span>
        <span>Back</span>
      </Link>
    </motion.div>
  );
}

