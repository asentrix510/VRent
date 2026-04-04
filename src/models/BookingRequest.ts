export interface BookingRequest {
  id?: string;
  vehicle_id: string;
  user_name: string;
  user_phone: string;
  duration: string; // e.g., "3 days", or dates could be used
  status: "pending" | "confirmed" | "rejected";
  created_at: Date | string | number;
}
