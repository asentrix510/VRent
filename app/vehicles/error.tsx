'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="w-24 h-24 rounded-3xl bg-rose-50 flex items-center justify-center text-rose-500 mb-8 border border-rose-100 shadow-sm">
        <AlertTriangle className="w-12 h-12" />
      </div>
      <h2 className="text-4xl font-black text-[#0f172a] mb-4 tracking-tight">Oops! Something went wrong.</h2>
      <p className="text-xl text-[#64748b] max-w-md mb-12">
        We encountered an error while trying to load the vehicles. This could be a temporary issue.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button 
          size="lg" 
          onClick={() => reset()} 
          className="rounded-2xl h-14 px-8 bg-[#0f172a] text-white hover:bg-[#0f172a]/90 flex items-center gap-2 text-lg font-bold"
        >
          <RefreshCcw className="w-5 h-5" />
          Try Again
        </Button>
        <Link href="/">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-2xl h-14 px-8 border-[#e5e7eb] text-[#0f172a] hover:bg-[#f1f5f9] flex items-center gap-2 text-lg font-bold"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
