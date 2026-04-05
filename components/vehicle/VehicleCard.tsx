'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Vehicle } from '@/types';
import { motion } from 'framer-motion';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/vehicles/${vehicle.id}`}>
        <Card className="overflow-hidden border-[#e5e7eb] rounded-3xl group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 right-4">
              <Badge 
                variant={vehicle.available ? 'default' : 'secondary'} 
                className={`rounded-full px-4 h-7 text-xs font-semibold ${
                  vehicle.available ? 'bg-white/90 text-[#0f172a] hover:bg-white' : 'bg-slate-900/50 text-white backdrop-blur-sm'
                }`}
              >
                {vehicle.available ? 'Available' : 'Unavailable'}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-[#64748b] mb-1">{vehicle.type}</p>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">{vehicle.name}</h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-bold text-[#0f172a]">
                ${vehicle.price} <span className="text-sm font-normal text-[#64748b]">/day</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-4 border-t border-[#f1f5f9] bg-[#f8fafc]/50">
            <span className="text-sm font-medium text-[#6366f1] group-hover:underline">
              View Details →
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
