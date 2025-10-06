'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarMarket() {
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      color: '#8ca0a0', 
      bgColor: '#a5d8ff' 
    },
    { 
      name: 'Recent Thoughts', 
      path: '/recent-thoughts', 
      color: '#d8b4a0', 
      bgColor: '#ffc9c9' 
    },
    { 
      name: 'Market Review', 
      path: '/market-review', 
      color: '#6f7c58',
      bgColor: '#b2f2bb' 
    },
    { 
      name: 'How I made this website', 
      path: '/how-i-made-this-website', 
      color: '#9eb4b3', 
      bgColor: '#d0bfff' 
    },
  ];

  return (
    <nav className="fixed left-6 h-screen w-64 p-12 flex flex-col gap-8" style={{ paddingTop: '161px' }}>
      {/* 导航链接 */}
      <div className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`${isActive ? 'text-2xl' : 'text-lg'} font-bold transition-all duration-300 hover:opacity-80 whitespace-nowrap px-3 py-1`}
              style={{ 
                fontFamily: 'Virgil, Patrick Hand, cursive',
                color: isActive ? '#000000' : item.color,
                backgroundColor: isActive ? item.bgColor + '80' : item.bgColor + '33',
                borderRadius: '15px 20px 18px 22px',
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

