import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function GET(request: Request) {
  // Prevent running in production for safety
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Seeding is only allowed in local development' }, { status: 403 });
  }

  try {
    const batch = adminDb.batch();

    // 1. Define Dummy Vendors
    const vendor1Ref = adminDb.collection('vendors').doc('vendor-demo-1');
    batch.set(vendor1Ref, {
      auth_uid: 'demo_uid_1',
      name: 'City Cruisers',
      phone: '+1234567890',
      location: 'Downtown Station',
      verified: true,
      created_at: new Date().toISOString()
    });

    const vendor2Ref = adminDb.collection('vendors').doc('vendor-demo-2');
    batch.set(vendor2Ref, {
      auth_uid: 'demo_uid_2',
      name: 'Mountain Wheels',
      phone: '+0987654321',
      location: 'Uptown Hub',
      verified: true,
      created_at: new Date().toISOString()
    });

    // 2. Define Dummy Vehicles
    const vehiclesData = [
      {
        id: 'vehicle-demo-1',
        vendor_id: 'vendor-demo-1',
        name: 'Honda Activa 6G',
        type: 'scooter',
        price_per_day: 15,
        images: ['https://placehold.co/600x400/000000/FFF?text=Honda+Activa'],
        available: true,
      },
      {
        id: 'vehicle-demo-2',
        vendor_id: 'vendor-demo-1',
        name: 'Royal Enfield Classic 350',
        type: 'bike',
        price_per_day: 35,
        images: ['https://placehold.co/600x400/000000/FFF?text=Royal+Enfield'],
        available: true,
      },
      {
        id: 'vehicle-demo-3',
        vendor_id: 'vendor-demo-2',
        name: 'Hyundai i20',
        type: 'car',
        price_per_day: 55,
        images: ['https://placehold.co/600x400/000000/FFF?text=Hyundai+i20'],
        available: true,
      },
      {
        id: 'vehicle-demo-4',
        vendor_id: 'vendor-demo-2',
        name: 'TVS Jupiter',
        type: 'scooter',
        price_per_day: 14,
        images: ['https://placehold.co/600x400/000000/FFF?text=TVS+Jupiter'],
        available: false,
      }
    ];

    vehiclesData.forEach((vehicle) => {
      const { id, ...data } = vehicle;
      const ref = adminDb.collection('vehicles').doc(id);
      batch.set(ref, {
        ...data,
        last_updated: new Date().toISOString()
      });
    });

    await batch.commit();

    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully with dummy vendors and vehicles!' 
    });
  } catch (error: any) {
    console.error('Seeding error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
