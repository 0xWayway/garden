'use client';

import { motion } from 'framer-motion';

// 手绘风格的图标组件
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M4 4 Q 8 6, 12 12 T 20 20 M20 4 Q 16 6, 12 12 T 4 20" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M 7 4 Q 4 4, 4 7 L 4 17 Q 4 20, 7 20 L 17 20 Q 20 20, 20 17 L 20 7 Q 20 4, 17 4 Z" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const SubstackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M 4 6 Q 6 5.5, 12 6 T 20 6 M 4 11 Q 6 10.5, 12 11 T 20 11 M 4 16 L 12 20 L 20 16 L 20 11" />
  </svg>
);

const WechatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <ellipse cx="9" cy="10" rx="6" ry="5" />
    <ellipse cx="15.5" cy="14" rx="5.5" ry="5" />
    <circle cx="7" cy="9" r="1" fill="currentColor" />
    <circle cx="11" cy="9" r="1" fill="currentColor" />
    <circle cx="14" cy="13.5" r="1" fill="currentColor" />
    <circle cx="17" cy="13.5" r="1" fill="currentColor" />
  </svg>
);

interface SocialLink {
  platform: string;
  url: string;
  order: number;
}

interface SocialLinksProps {
  links?: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  // 默认链接作为后备
  const defaultLinks = [
    {
      platform: 'X',
      url: 'https://x.com/0xWayway',
      order: 1,
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/0x_luckyy?igsh=Y2x1NzJsNmlubm5u&utm_source=qr',
      order: 2,
    },
    {
      platform: 'Substack',
      url: '#',
      order: 3,
    },
    {
      platform: 'VX',
      url: '#',
      order: 4,
    },
  ];

  const displayLinks = links && links.length > 0 ? links : defaultLinks;

  // 图标映射
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'x':
        return <XIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'substack':
        return <SubstackIcon />;
      case 'vx':
        return <WechatIcon />;
      default:
        return <XIcon />;
    }
  };

  // 颜色映射
  const getColors = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'x':
        return { color: '#1a2a27', bgColor: '#a5d8ff' };
      case 'instagram':
        return { color: '#1a2a27', bgColor: '#ffc9c9' };
      case 'substack':
        return { color: '#1a2a27', bgColor: '#b2f2bb' };
      case 'vx':
        return { color: '#1a2a27', bgColor: '#d0bfff' };
      default:
        return { color: '#1a2a27', bgColor: '#a5d8ff' };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      className="flex flex-wrap gap-3 justify-center mt-6"
    >
      {displayLinks.map((link) => {
        const colors = getColors(link.platform);
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-all duration-300 hover:scale-110 hover:opacity-80 flex items-center justify-center"
            style={{
              color: colors.color,
              backgroundColor: colors.bgColor + '80', // 50% 透明度
              borderRadius: '12px 18px 15px 20px', // 不规则圆角
              textDecoration: 'none',
            }}
            title={link.platform}
          >
            {getIcon(link.platform)}
          </a>
        );
      })}
    </motion.div>
  );
}

