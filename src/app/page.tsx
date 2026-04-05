import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold tracking-tight mb-4 text-emerald-600">VRent API is Live</h1>
      <p className="text-lg text-gray-700 mb-8">Your Next.js environment & Firebase are wired up successfully.</p>

      <div className="flex gap-4">
        <Link 
          href="/api/seed"
          className="border border-emerald-500 bg-emerald-50 px-6 py-3 rounded-lg text-emerald-700 font-medium hover:bg-emerald-100 transition-colors"
        >
          Seed Database
        </Link>
      </div>
    </main>
  );
}
