export interface Vehicle {
  id: string;
  name: string;
  type: 'Car' | 'Bike' | 'Van' | 'Scooter';
  price: number;
  image: string;
  available: boolean;
  description: string;
  features: string[];
}

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Tesla Model S',
    type: 'Car',
    price: 120,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
    available: true,
    description: 'A premium electric sedan with unmatched performance and range.',
    features: ['Autopilot', 'Premium Audio', 'All-Wheel Drive'],
  },
  {
    id: '2',
    name: 'BMW R 1250 GS',
    type: 'Bike',
    price: 85,
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800',
    available: true,
    description: 'The ultimate adventure motorcycle for any terrain.',
    features: ['ABS Pro', 'Hill Start Control', 'Dynamic Traction Control'],
  },
  {
    id: '3',
    name: 'Mercedes-Benz Sprinter',
    type: 'Van',
    price: 150,
    image: 'https://images.unsplash.com/photo-1549419253-73138b251913?auto=format&fit=crop&q=80&w=800',
    available: false,
    description: 'Spacious and reliable van for group travels or heavy lifting.',
    features: ['Spacious Interior', 'Efficient Engine', 'Advanced Safety'],
  },
  {
    id: '4',
    name: 'Honda Activa 6G',
    type: 'Scooter',
    price: 25,
    image: 'https://images.unsplash.com/photo-1566891396825-78e7343e06a3?auto=format&fit=crop&q=80&w=800',
    available: true,
    description: 'The most popular choice for city commuting.',
    features: ['Fuel Efficient', 'Easy Handling', 'Double Lid External Fuel Fill'],
  },
  {
    id: '5',
    name: 'Audi e-tron GT',
    type: 'Car',
    price: 140,
    image: 'https://images.unsplash.com/photo-1603584173870-7f3ca9128156?auto=format&fit=crop&q=80&w=800',
    available: true,
    description: 'Electric gran turismo that redefines progressive performance.',
    features: ['Matrix LED Headlights', 'Bang & Olufsen Sound', 'Carbon Fiber Accents'],
  },
  {
    id: '6',
    name: 'Yamaha MT-07',
    type: 'Bike',
    price: 70,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800',
    available: true,
    description: 'The dark side of Japan. Agile, powerful, and stylish.',
    features: ['Torque-rich CP2 engine', 'LED Lighting', 'Aggressive Styling'],
  },
];
