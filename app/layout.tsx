import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { BottomNav } from '@/components/layout/BottomNav';
import { PWAProvider } from '@/components/pwa/PWAProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VRent - Premium Vehicle Rentals',
  description: 'Find premium vehicles around you for your next adventure.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VRent',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
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
          {/* Top navbar — visible on all screens, but mobile links hidden */}
          <Navbar />
          {/* Page content — padded for top navbar + bottom nav on mobile */}
          <main className="min-h-screen pt-16 pb-20 md:pb-0">
            {children}
          </main>
          {/* Bottom nav — mobile only */}
          <BottomNav />
        </PWAProvider>
      </body>
    </html>
  );
}
