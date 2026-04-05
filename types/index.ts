export type VehicleType = 'Car' | 'Bike' | 'Van' | 'Scooter';

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  price: number;
  image: string;
  available: boolean;
  description: string;
  features: string[];
}

export interface UIStore {
  isMobileFilterOpen: boolean;
  searchQuery: string;
  priceRange: [number, number];
  selectedType: VehicleType | null;
  setIsMobileFilterOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSelectedType: (type: VehicleType | null) => void;
  resetFilters: () => void;
}
