import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';

import { PWAProvider } from '@/components/pwa/PWAProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VRent - Premium Vehicle Rentals',
  description: 'Find premium vehicles around you for your next adventure.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-[#f8fafc] text-[#0f172a] antialiased`}>
        <PWAProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </PWAProvider>
      </body>
    </html>
  );
}
