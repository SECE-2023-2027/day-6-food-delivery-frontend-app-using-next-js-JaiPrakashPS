'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center text-2xl font-bold text-green-600">
            <span className="text-3xl mr-2">🍔</span> Namma Kadai
          </Link>

          <div className="flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
            <Link href="/restaurants" className="hover:text-green-600 transition">Restaurants</Link>
            <Link href="/search" className="hover:text-green-600 transition">Search</Link>
            <Link href="/cart" className="hover:text-green-600 transition">Cart</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
