'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center text-2xl font-bold text-green-600">
            <span className="text-3xl mr-2">🍔</span> Namma Kadai
          </Link>

          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
            <Link href="/restaurants" className="hover:text-green-600 transition">Restaurants</Link>
            <Link href="/search" className="hover:text-green-600 transition">Search</Link>
            <Link href="/cart" className="hover:text-green-600 transition">Cart</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <Link href="/" className="block text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/help" className="block text-gray-700 hover:text-green-600">Help</Link>
          <Link href="/search" className="block text-gray-700 hover:text-green-600">Search</Link>
          <Link href="/cart" className="block text-gray-700 hover:text-green-600">Cart</Link>
        </div>
      )}
    </nav>
  );
}
