import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e5e7eb] px-4 md:px-6 h-16 flex items-center justify-between">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#0f172a]">
          VRent
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/vehicles" className="text-sm font-medium text-[#64748b] hover:text-[#0f172a] transition-colors">
            Browse
          </Link>
          <Link href="/vendor" className="text-sm font-medium text-[#64748b] hover:text-[#0f172a] transition-colors">
            Vendor Panel
          </Link>
        </div>

        {/* Desktop CTA only */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/vehicles">
            <Button className="rounded-2xl bg-[#0f172a] text-white hover:bg-[#0f172a]/90 h-10 px-6">
              Explore
            </Button>
          </Link>
        </div>

        {/* Mobile: just the brand, bottom nav handles navigation */}
      </div>
    </nav>
  );
};
