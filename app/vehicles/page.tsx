'use client';

import { useUIStore } from '@/store/useUIStore';
import { mockVehicles } from '@/data/mockData';
import { VehicleCard } from '@/components/vehicle/VehicleCard';
import { FiltersSidebar } from '@/components/vehicle/FiltersSidebar';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/ui/search-bar';
import { Filter, SlidersHorizontal, PackageOpen } from 'lucide-react';
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
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="mb-12 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-[#0f172a]">
          Find your vehicle
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <SearchBar />
          </div>
          
          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger 
              render={
                <Button size="lg" variant="outline" className="md:hidden w-full h-14 rounded-2xl border-[#e5e7eb] flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </Button>
              }
            />
            <SheetContent side="bottom" className="h-[80vh] rounded-t-[2rem] p-0 overflow-hidden border-t-0">
              <SheetHeader className="p-6 border-b border-[#f1f5f9]">
                <SheetTitle className="text-xl font-bold">Filters</SheetTitle>
              </SheetHeader>
              <div className="p-2 overflow-y-auto h-full pb-20">
                <FiltersSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex gap-10">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-72 shrink-0 h-fit sticky top-24">
          <FiltersSidebar />
        </aside>

        {/* Main Grid */}
        <div className="flex-1">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredVehicles.map((vehicle) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VehicleCard vehicle={vehicle} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 mb-6">
                  <PackageOpen className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">No vehicles found</h3>
                <p className="text-[#64748b] max-w-sm">
                  We couldn't find anything matching your current filters. Try adjusting your search or resetting filters.
                </p>
                <Button 
                  variant="link" 
                  className="mt-4 text-[#6366f1] underline"
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
