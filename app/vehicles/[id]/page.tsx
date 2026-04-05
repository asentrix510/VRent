'use client';

import { useParams, useRouter } from 'next/navigation';
import { mockVehicles } from '@/data/mockData';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageSquare, ShieldCheck, Zap, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const vehicle = mockVehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Vehicle Not Found</h2>
        <Button onClick={() => router.push('/vehicles')} variant="default" className="rounded-2xl">
          Back to Browse
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 relative pb-32">
      <Button 
        variant="ghost" 
        onClick={() => router.back()} 
        className="mb-8 hover:bg-[#f1f5f9] rounded-2xl flex items-center gap-2 text-[#64748b] hover:text-[#0f172a]"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 right-6">
              <Badge 
                variant={vehicle.available ? 'default' : 'secondary'} 
                className={`rounded-full px-5 h-8 text-sm font-bold shadow-lg ${
                  vehicle.available ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'
                }`}
              >
                {vehicle.available ? 'Available' : 'Unavailable'}
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 border-2 border-white shadow-sm ring-1 ring-[#e5e7eb]">
                <div className="absolute inset-0 flex items-center justify-center text-[#94a3b8]">
                  <Image 
                    src={vehicle.image} 
                    alt="Gallery" 
                    fill 
                    className="object-cover opacity-50 grayscale"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Info & Details */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#6366f1] font-bold uppercase tracking-wider text-sm">
              <Zap className="w-4 h-4" />
              {vehicle.type}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">{vehicle.name}</h1>
            <div className="flex items-end gap-2 pt-2">
              <span className="text-4xl font-black text-[#0f172a]">${vehicle.price}</span>
              <span className="text-xl text-[#64748b] pb-1">/ day</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Info className="w-5 h-5 text-[#6366f1]" />
              Description
            </h3>
            <p className="text-lg text-[#64748b] leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#6366f1]" />
              Key Features
            </h3>
            <div className="flex flex-wrap gap-3">
              {vehicle.features.map((feature, i) => (
                <div 
                  key={i} 
                  className="bg-[#f1f5f9] text-[#0f172a] text-sm font-semibold py-3 px-5 rounded-2xl border border-[#e5e7eb] hover:bg-white hover:border-[#6366f1] transition-all cursor-default"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Booking Card */}
          <Card className="hidden lg:block border-[#e5e7eb] rounded-[2rem] shadow-lg bg-white overflow-hidden p-8 space-y-6">
            <div className="space-y-4">
              <Button size="lg" className="w-full h-16 rounded-2xl bg-[#0f172a] text-white hover:bg-[#0f172a]/90 text-lg font-bold shadow-xl shadow-slate-200">
                Request Booking
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button size="lg" variant="outline" className="h-16 rounded-2xl border-[#e5e7eb] text-[#0f172a] font-bold flex items-center gap-2 hover:bg-[#f8fafc]">
                  <Phone className="w-5 h-5" />
                  Call Vendor
                </Button>
                <Button size="lg" variant="outline" className="h-16 rounded-2xl border-[#6366f1]/20 text-[#6366f1] bg-indigo-50/50 font-bold flex items-center gap-2 hover:bg-indigo-50">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="lg:hidden fixed bottom-6 left-4 right-4 bg-white/90 backdrop-blur-xl border border-[#e5e7eb] p-4 rounded-[2rem] shadow-2xl z-50 flex items-center gap-3 ring-1 ring-black/5"
      >
        <div className="flex-1">
          <Button size="lg" className="w-full h-14 rounded-2xl bg-[#0f172a] text-white font-bold text-base">
            Book Now
          </Button>
        </div>
        <div className="flex gap-2">
          <Button size="icon" variant="outline" className="h-14 w-14 rounded-2xl border-[#e5e7eb] shrink-0 text-[#0f172a] hover:bg-[#f1f5f9]">
            <Phone className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="outline" className="h-14 w-14 rounded-2xl border-[#6366f1]/20 bg-indigo-50/50 shrink-0 text-[#6366f1]">
            <MessageSquare className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
