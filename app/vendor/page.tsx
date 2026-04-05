'use client';

import { VehicleForm } from '@/components/forms/VehicleForm';
import { mockVehicles } from '@/data/mockData';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutDashboard, Car, Calendar, DollarSign, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VendorPage() {
  const vendorVehicles = mockVehicles.slice(0, 3); // Mocking as vendor's own vehicles

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="mb-8 md:mb-16 space-y-3 md:space-y-6">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#0f172a]">
          Vendor Dashboard
        </h1>
        <p className="text-base md:text-xl text-[#64748b] max-w-2xl">
          Manage your fleet, track performance, and add new listings in one place.
        </p>

        {/* Stats Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-4 md:mt-12">
          {[
            { label: 'Total Vehicles', value: '12', icon: Car, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Active Rentals', value: '8', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Pending', value: '3', icon: LayoutDashboard, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Earnings', value: '$4,280', icon: DollarSign, color: 'text-slate-900', bg: 'bg-slate-100' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="border-[#e5e7eb] rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-shadow py-4 px-4 md:h-32 md:flex md:flex-col md:justify-center md:px-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-[#64748b]">{stat.label}</p>
                    <p className="text-xl md:text-2xl font-black text-[#0f172a]">{stat.value}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Left Column: List Form */}
        <div className="xl:col-span-2 space-y-12">
          <VehicleForm />
        </div>

        {/* Right Column: Active Listings */}
        <div className="space-y-8">
          <h2 className="text-2xl font-black text-[#0f172a]">Your Active Listings</h2>
          <div className="space-y-4">
            {vendorVehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-[#e5e7eb] rounded-3xl shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-[#f1f5f9]">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#6366f1]">{vehicle.type}</p>
                      <h4 className="font-bold text-[#0f172a] truncate">{vehicle.name}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className={`rounded-lg h-6 text-[10px] uppercase font-bold tracking-wider ${
                          vehicle.available ? 'border-emerald-200 text-emerald-600 bg-emerald-50' : 'border-slate-200 text-slate-500 bg-slate-50'
                        }`}>
                          {vehicle.available ? 'Active' : 'Offline'}
                        </Badge>
                        <p className="text-sm font-bold text-[#0f172a]">${vehicle.price}/d</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="icon" variant="ghost" className="h-10 w-10 text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-xl flex items-center justify-center">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-10 w-10 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl flex items-center justify-center">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <Button variant="outline" className="w-full h-14 rounded-2xl border-[#e5e7eb] font-bold text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc]">
            View All Managed Vehicles
          </Button>
        </div>
      </div>
    </div>
  );
}
