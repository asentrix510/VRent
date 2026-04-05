'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, LayoutDashboard } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/vehicles', label: 'Browse', icon: Search },
  { href: '/vendor', label: 'Dashboard', icon: LayoutDashboard },
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-xl border-t border-[#e5e7eb] pb-safe">
      <div className="flex items-center justify-around px-2 h-16">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full min-w-0 transition-all duration-200 rounded-2xl mx-1 ${
                isActive
                  ? 'text-[#6366f1]'
                  : 'text-[#94a3b8] hover:text-[#0f172a]'
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-200 ${
                isActive ? 'bg-[#6366f1]/10' : ''
              }`}>
                <Icon className={`transition-all duration-200 ${isActive ? 'w-6 h-6' : 'w-5 h-5'}`} />
              </div>
              <span className={`text-[10px] font-semibold tracking-wide transition-all duration-200 ${
                isActive ? 'opacity-100' : 'opacity-70'
              }`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
