"use server";

import * as vendorService from '@/services/vendorService';
import { Vendor } from '@/models/Vendor';

export async function registerVendorAction(vendorData: Omit<Vendor, 'id'>) {
  try {
    const id = await vendorService.createVendor(vendorData);
    return { success: true, data: { id } };
  } catch (error: any) {
    console.error("Error registering vendor:", error);
    return { success: false, error: error.message || "Failed to register vendor." };
  }
}

export async function fetchVendorProfile(vendorId: string) {
  try {
    const vendor = await vendorService.getVendor(vendorId);
    if (!vendor) return { success: false, error: "Vendor not found." };
    return { success: true, data: vendor };
  } catch (error: any) {
    console.error("Error fetching vendor:", error);
    return { success: false, error: error.message || "Failed to fetch vendor." };
  }
}

export async function updateVendorProfile(vendorId: string, updates: Partial<Vendor>) {
  try {
    await vendorService.updateVendor(vendorId, updates);
    return { success: true };
  } catch (error: any) {
    console.error("Error updating vendor:", error);
    return { success: false, error: error.message || "Failed to update vendor." };
  }
}
