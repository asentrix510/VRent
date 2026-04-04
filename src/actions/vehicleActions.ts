"use server";

import * as vehicleService from '@/services/vehicleService';
import { Vehicle } from '@/models/Vehicle';

export async function addVehicleAction(vehicleData: Omit<Vehicle, 'id'>) {
  try {
    const id = await vehicleService.createVehicle(vehicleData);
    return { success: true, data: { id } };
  } catch (error: any) {
    console.error("Error adding vehicle:", error);
    return { success: false, error: error.message || "Failed to add vehicle." };
  }
}

export async function fetchAllVehicles() {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    return { success: true, data: vehicles };
  } catch (error: any) {
    console.error("Error fetching vehicles:", error);
    return { success: false, error: error.message || "Failed to fetch vehicles." };
  }
}

export async function fetchVendorVehicles(vendorId: string) {
  try {
    const vehicles = await vehicleService.getVehiclesByVendor(vendorId);
    return { success: true, data: vehicles };
  } catch (error: any) {
    console.error("Error fetching vendor vehicles:", error);
    return { success: false, error: error.message || "Failed to fetch vendor vehicles." };
  }
}

export async function updateVehicleAvailabilityWrapper(vehicleId: string, available: boolean) {
  try {
    await vehicleService.updateVehicle(vehicleId, { available });
    return { success: true };
  } catch (error: any) {
    console.error("Error updating vehicle availability:", error);
    return { success: false, error: error.message || "Failed to update availability." };
  }
}
