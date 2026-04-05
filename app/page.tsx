import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/ui/search-bar';
import { Shield, Clock, MapPin } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0f172a] mb-6">
            Find Vehicles <br /> Around You
          </h1>
          <p className="text-xl text-[#64748b] mb-10 max-w-xl">
            Rent cars, bikes, and vans from trusted local vendors. 
            Premium experience, minimal effort.
          </p>
          
          <div className="mb-12">
            <SearchBar />
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/vehicles">
              <Button size="lg" className="rounded-2xl px-8 h-14 bg-[#0f172a] text-white hover:bg-[#0f172a]/90 text-lg">
                Browse All
              </Button>
            </Link>
            <Link href="/vendor">
              <Button size="lg" variant="outline" className="rounded-2xl px-8 h-14 border-[#e5e7eb] text-[#0f172a] hover:bg-[#f1f5f9] text-lg">
                List Your Vehicle
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white border-y border-[#e5e7eb] py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-[#6366f1]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Secure Rentals</h3>
              <p className="text-[#64748b]">
                All vendors and vehicles are verified for your safety and peace of mind.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-[#6366f1]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Instant Booking</h3>
              <p className="text-[#64748b]">
                Request a booking in seconds. No complex paperwork or waiting lines.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-[#6366f1]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Local Experts</h3>
              <p className="text-[#64748b]">
                Supporting local communities by connecting you with nearby vehicle owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-24 w-full text-center md:text-left">
        <div className="bg-[#0f172a] rounded-[2rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Ready to hit the road?</h2>
            <p className="text-slate-400 text-lg">Start browsing the best vehicles in your area today.</p>
          </div>
          <Link href="/vehicles">
            <Button size="lg" className="rounded-2xl px-10 h-16 bg-[#6366f1] text-white hover:bg-[#6366f1]/90 text-lg shadow-xl shadow-indigo-500/20 transition-all hover:scale-105">
              Explore Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
