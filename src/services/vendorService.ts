import { adminDb } from '@/lib/firebase-admin';
import { Vendor } from '@/models/Vendor';

const COLLECTION_NAME = 'vendors';

export async function createVendor(data: Omit<Vendor, 'id'>): Promise<string> {
  const docRef = await adminDb.collection(COLLECTION_NAME).add({
    ...data,
    created_at: data.created_at || new Date().toISOString(),
  });
  return docRef.id;
}

export async function getVendor(id: string): Promise<Vendor | null> {
  const doc = await adminDb.collection(COLLECTION_NAME).doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Vendor;
}

export async function getAllVendors(): Promise<Vendor[]> {
  const snapshot = await adminDb.collection(COLLECTION_NAME).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vendor));
}

export async function updateVendor(id: string, data: Partial<Vendor>): Promise<void> {
  await adminDb.collection(COLLECTION_NAME).doc(id).update(data);
}
