"use server";

import * as bookingService from '@/services/bookingService';
import { BookingRequest } from '@/models/BookingRequest';

export async function submitBookingAction(bookingData: Omit<BookingRequest, 'id'>) {
  try {
    const id = await bookingService.createBooking(bookingData);
    return { success: true, data: { id } };
  } catch (error: any) {
    console.error("Error submitting booking:", error);
    return { success: false, error: error.message || "Failed to secure booking." };
  }
}

export async function fetchVendorBookings(vendorId: string) {
  try {
    const bookings = await bookingService.getBookingsForVendor(vendorId);
    return { success: true, data: bookings };
  } catch (error: any) {
    console.error("Error fetching vendor bookings:", error);
    return { success: false, error: error.message || "Failed to fetch bookings." };
  }
}

export async function respondToBookingAction(bookingId: string, status: BookingRequest['status']) {
  try {
    await bookingService.updateBookingStatus(bookingId, status);
    return { success: true };
  } catch (error: any) {
    console.error("Error updating booking status:", error);
    return { success: false, error: error.message || "Failed to respond to booking." };
  }
}
