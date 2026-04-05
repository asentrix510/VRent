import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/ui/search-bar';
import { Shield, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Mobile: compact pill label */}
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 text-[#6366f1] rounded-full px-3 py-1.5 text-xs font-semibold mb-5 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
            Campus vehicle discovery
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-[#0f172a] mb-4 md:mb-6 leading-[1.1]">
            Find Vehicles<br />Around You
          </h1>
          <p className="text-base md:text-xl text-[#64748b] mb-8 md:mb-10 max-w-xl leading-relaxed">
            Rent cars, bikes, and vans from trusted local vendors.
            Premium experience, minimal effort.
          </p>

          <div className="mb-6 md:mb-10">
            <SearchBar />
          </div>

          {/* CTA buttons — stacked on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/vehicles" className="flex-1 sm:flex-none">
              <Button size="lg" className="w-full sm:w-auto rounded-2xl px-8 h-14 bg-[#0f172a] text-white hover:bg-[#0f172a]/90 text-base font-semibold">
                Browse All Vehicles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/vendor" className="flex-1 sm:flex-none">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl px-8 h-14 border-[#e5e7eb] text-[#0f172a] hover:bg-[#f1f5f9] text-base font-semibold">
                List Your Vehicle
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white border-y border-[#e5e7eb] py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                icon: Shield,
                title: 'Secure Rentals',
                desc: 'All vendors and vehicles are verified for your safety and peace of mind.',
              },
              {
                icon: Clock,
                title: 'Instant Booking',
                desc: 'Request a booking in seconds. No complex paperwork or waiting lines.',
              },
              {
                icon: MapPin,
                title: 'Local Experts',
                desc: 'Supporting local communities by connecting you with nearby vehicle owners.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 md:flex-col md:gap-0 md:space-y-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-[#6366f1]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">{title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-24 w-full">
        <div className="bg-[#0f172a] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Ready to hit the road?</h2>
            <p className="text-slate-400 text-sm md:text-lg">Start browsing the best vehicles in your area today.</p>
          </div>
          <Link href="/vehicles" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto rounded-2xl px-10 h-14 bg-[#6366f1] text-white hover:bg-[#6366f1]/90 text-base font-semibold shadow-xl shadow-indigo-500/20 transition-all hover:scale-105">
              Explore Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
