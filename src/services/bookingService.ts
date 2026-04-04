import { adminDb } from '@/lib/firebase-admin';
import { BookingRequest } from '@/models/BookingRequest';

const COLLECTION_NAME = 'booking_requests';

export async function createBooking(data: Omit<BookingRequest, 'id'>): Promise<string> {
  const docRef = await adminDb.collection(COLLECTION_NAME).add({
    ...data,
    created_at: data.created_at || new Date().toISOString(),
  });
  return docRef.id;
}

export async function getBooking(id: string): Promise<BookingRequest | null> {
  const doc = await adminDb.collection(COLLECTION_NAME).doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as BookingRequest;
}

export async function updateBookingStatus(id: string, status: BookingRequest['status']): Promise<void> {
  await adminDb.collection(COLLECTION_NAME).doc(id).update({ status });
}

export async function getBookingsByUserPhone(phone: string): Promise<BookingRequest[]> {
  const snapshot = await adminDb.collection(COLLECTION_NAME)
    .where('user_phone', '==', phone)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BookingRequest));
}

export async function getBookingsForVehicle(vehicleId: string): Promise<BookingRequest[]> {
  const snapshot = await adminDb.collection(COLLECTION_NAME)
    .where('vehicle_id', '==', vehicleId)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BookingRequest));
}

export async function getBookingsForVendor(vendorId: string): Promise<BookingRequest[]> {
  const snapshot = await adminDb.collection(COLLECTION_NAME)
    .where('vendor_id', '==', vendorId)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BookingRequest));
}

