import { adminDb } from '@/lib/firebase-admin';
import { Vehicle } from '@/models/Vehicle';

const COLLECTION_NAME = 'vehicles';

export async function createVehicle(data: Omit<Vehicle, 'id'>): Promise<string> {
  const docRef = await adminDb.collection(COLLECTION_NAME).add({
    ...data,
    last_updated: data.last_updated || new Date().toISOString(),
  });
  return docRef.id;
}

export async function getVehicle(id: string): Promise<Vehicle | null> {
  const doc = await adminDb.collection(COLLECTION_NAME).doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Vehicle;
}

export async function getVehiclesByVendor(vendorId: string): Promise<Vehicle[]> {
  const snapshot = await adminDb.collection(COLLECTION_NAME)
    .where('vendor_id', '==', vendorId)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vehicle));
}

export async function getAllVehicles(): Promise<Vehicle[]> {
  const snapshot = await adminDb.collection(COLLECTION_NAME).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vehicle));
}

export async function updateVehicle(id: string, data: Partial<Vehicle>): Promise<void> {
  const updateData = {
    ...data,
    last_updated: new Date().toISOString()
  };
  await adminDb.collection(COLLECTION_NAME).doc(id).update(updateData);
}

export async function deleteVehicle(id: string): Promise<void> {
  await adminDb.collection(COLLECTION_NAME).doc(id).delete();
}
