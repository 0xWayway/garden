'use client';

import { motion } from 'framer-motion';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'X',
      url: 'https://x.com/0xWayway',
      color: '#1a2a27',
      bgColor: '#a5d8ff',
    },
    {
      name: 'Ins',
      url: 'https://www.instagram.com/0x_luckyy?igsh=Y2x1NzJsNmlubm5u&utm_source=qr',
      color: '#1a2a27',
      bgColor: '#ffc9c9',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      className="flex gap-4 justify-center mt-6"
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-lg font-bold transition-all duration-300 hover:scale-110 hover:opacity-80"
          style={{
            fontFamily: 'Virgil, Patrick Hand, cursive',
            color: link.color,
            backgroundColor: link.bgColor + '80', // 50% 透明度
            borderRadius: '12px 18px 15px 20px', // 不规则圆角
            textDecoration: 'none',
          }}
        >
          {link.name}
        </a>
      ))}
    </motion.div>
  );
}

