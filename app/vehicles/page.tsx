'use client';

import { useUIStore } from '@/store/useUIStore';
import { mockVehicles } from '@/data/mockData';
import { VehicleCard } from '@/components/vehicle/VehicleCard';
import { FiltersSidebar } from '@/components/vehicle/FiltersSidebar';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/ui/search-bar';
import { SlidersHorizontal, PackageOpen } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';

export default function VehiclesPage() {
  const {
    searchQuery,
    priceRange,
    selectedType,
    isMobileFilterOpen,
    setIsMobileFilterOpen
  } = useUIStore();

  const filteredVehicles = mockVehicles.filter((v) => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || v.type === selectedType;
    const matchesPrice = v.price >= priceRange[0] && v.price <= priceRange[1];
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">
      {/* Header */}
      <div className="mb-6 md:mb-10 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          Find your vehicle
        </h1>

        {/* Search + Filter row */}
        <div className="flex gap-3 items-center">
          <div className="flex-1">
            <SearchBar />
          </div>

          {/* Mobile filter trigger */}
          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden h-12 w-12 rounded-2xl border-[#e5e7eb] shrink-0 flex items-center justify-center"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </Button>
              }
            />
            <SheetContent side="bottom" className="h-[82vh] rounded-t-[2rem] p-0 overflow-hidden border-t-0">
              <SheetHeader className="p-5 border-b border-[#f1f5f9]">
                <SheetTitle className="text-lg font-bold">Filters</SheetTitle>
              </SheetHeader>
              <div className="p-4 overflow-y-auto h-full pb-28">
                <FiltersSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Active filter chips */}
        {(selectedType || searchQuery) && (
          <div className="flex flex-wrap gap-2">
            {selectedType && (
              <span className="inline-flex items-center gap-1.5 bg-[#6366f1]/10 text-[#6366f1] text-xs font-semibold px-3 py-1.5 rounded-full">
                {selectedType}
                <button
                  onClick={() => useUIStore.getState().setSelectedType(null)}
                  className="ml-0.5 opacity-70 hover:opacity-100 text-sm leading-none"
                >×</button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 bg-[#0f172a]/10 text-[#0f172a] text-xs font-semibold px-3 py-1.5 rounded-full">
                "{searchQuery}"
                <button
                  onClick={() => useUIStore.getState().setSearchQuery('')}
                  className="ml-0.5 opacity-70 hover:opacity-100 text-sm leading-none"
                >×</button>
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-72 shrink-0 h-fit sticky top-24">
          <FiltersSidebar />
        </aside>

        {/* Main Grid */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6"
              >
                {filteredVehicles.map((vehicle) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <VehicleCard vehicle={vehicle} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 mb-5">
                  <PackageOpen className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">No vehicles found</h3>
                <p className="text-[#64748b] text-sm max-w-xs">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <Button
                  variant="link"
                  className="mt-4 text-[#6366f1]"
                  onClick={() => useUIStore.getState().resetFilters()}
                >
                  Reset all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
