export interface Vehicle {
  id?: string;
  vendor_id: string;
  name: string;
  type: "bike" | "scooter" | "car";
  price_per_day: number;
  images: string[];
  available: boolean;
  last_updated: Date | string | number; // Support Firestore Timestamp or ISO string
}
