'use client';

import Link from 'next/link';

export default function Navbar() {

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Recent Thoughts', path: '/recent-thoughts' },
    { name: 'Market Review', path: '/market-review' },
  ];

  return (
    <nav className="fixed left-16 h-screen w-64 p-12 flex flex-col gap-8" style={{ paddingTop: '161px' }}>
      {/* 导航链接 */}
      <div className="flex flex-col gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="text-2xl font-bold text-[#8ca0a0] transition-all duration-300 hover:opacity-70 whitespace-nowrap"
            style={{ fontFamily: 'Virgil, Patrick Hand, cursive' }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

