import { create } from 'zustand';
import { UIStore } from '@/types';

export const useUIStore = create<UIStore>((set) => ({
  isMobileFilterOpen: false,
  searchQuery: '',
  priceRange: [0, 500],
  selectedType: null,
  setIsMobileFilterOpen: (open) => set({ isMobileFilterOpen: open }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setPriceRange: (range) => set({ priceRange: range }),
  setSelectedType: (type) => set({ selectedType: type }),
  resetFilters: () => set({ 
    searchQuery: '', 
    priceRange: [0, 500], 
    selectedType: null 
  }),
}));
