'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useUIStore } from '@/store/useUIStore';
import { VehicleType } from '@/types';

const VEHICLE_TYPES: VehicleType[] = ['Car', 'Bike', 'Van', 'Scooter'];

export const FiltersSidebar = () => {
  const { 
    priceRange, 
    setPriceRange, 
    selectedType, 
    setSelectedType, 
    resetFilters 
  } = useUIStore();

  return (
    <div className="space-y-10 p-6 bg-white border border-[#e5e7eb] rounded-[2rem] sticky top-24 h-fit">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#0f172a]">Filters</h3>
        <Button variant="ghost" size="sm" onClick={resetFilters} className="text-[#6366f1] h-8 px-2 hover:bg-indigo-50">
          Reset all
        </Button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-[#0f172a]">Price per day <span className="text-[#6366f1]">(${priceRange[0]} - ${priceRange[1]})</span></Label>
          <div className="pt-6 px-1">
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:border-2 [&_[role=slider]]:border-[#6366f1]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-semibold text-[#0f172a]">Vehicle Type</Label>
          <div className="grid grid-cols-1 gap-3">
            {VEHICLE_TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-3 cursor-pointer group">
                <Checkbox
                  id={type}
                  checked={selectedType === type}
                  onCheckedChange={(checked) => setSelectedType(checked ? type : null)}
                  className="rounded h-5 w-5 border-[#e5e7eb] data-[state=checked]:bg-[#6366f1]"
                />
                <Label
                  htmlFor={type}
                  className="text-sm font-medium text-[#64748b] group-hover:text-[#0f172a] transition-colors cursor-pointer"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
