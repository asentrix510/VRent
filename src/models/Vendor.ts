export interface Vendor {
  id?: string;
  auth_uid?: string;
  name: string;
  phone: string;
  location: string;
  verified: boolean;
  created_at: Date | string | number; // Support Firestore Timestamp or ISO string
}
