'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="mb-12 space-y-6">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Skeleton className="h-14 flex-1 rounded-2xl w-full" />
          <Skeleton className="h-14 w-full md:w-32 rounded-2xl" />
        </div>
      </div>

      <div className="flex gap-10">
        <aside className="hidden md:block w-72 shrink-0 h-fit">
          <Skeleton className="h-[400px] w-full rounded-[2rem]" />
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 4, 5, 6, 7].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/3] w-full rounded-3xl" />
                <div className="space-y-2 p-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-48" />
                  <div className="pt-4 flex justify-between">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
