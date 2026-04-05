'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useUIStore } from '@/store/useUIStore';

export const SearchBar = () => {
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useUIStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/vehicles?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
        <Input
          type="text"
          placeholder="Search for cars, bikes, vans..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-14 pl-12 pr-4 bg-white border-[#e5e7eb] rounded-2xl text-lg focus-visible:ring-[#6366f1] shadow-sm"
        />
      </div>
    </form>
  );
};
