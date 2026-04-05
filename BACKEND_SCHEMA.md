🗄️ 5. BACKEND_SCHEMA
5.1 Vendors Collection
vendors {
  id: string
  auth_uid: string // corresponds to Firebase Auth UI / simple login
  name: string
  phone: string
  location: string
  verified: boolean
  created_at: timestamp
}
5.2 Vehicles Collection
vehicles {
  id: string
  vendor_id: string
  name: string
  type: "bike" | "scooter" | "car"
  price_per_day: number
  images: string[]
  available: boolean
  last_updated: timestamp
}
5.3 Booking Requests Collection
booking_requests {
  id: string
  vehicle_id: string
  vendor_id: string // Need it to query "Notification from user" for a specific vendor
  user_name: string
  user_phone: string
  duration: string
  status: "pending" | "confirmed" | "rejected"
  created_at: timestamp
}
5.4 Optional: Reviews
reviews {
  id: string
  vehicle_id: string
  rating: number
  comment: string
}