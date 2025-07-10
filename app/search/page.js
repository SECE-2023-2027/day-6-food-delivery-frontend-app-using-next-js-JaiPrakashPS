'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import foodData from '../data/foodData'; // Adjust path if necessary

export default function search() {
  const [search, setSearch] = useState('');

  const filteredFoods = Object.entries(foodData).filter(([id, food]) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Search Food</h1>
      
      <input
        type="text"
        placeholder="Search for food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg mb-6"
      />

      {filteredFoods.length === 0 ? (
        <p className="text-gray-500">No matching foods found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map(([id, food]) => (
            <div key={id} className="border rounded-lg p-4 shadow-md">
              <Image
                src={food.image}
                alt={food.name}
                width={400}
                height={300}
                className="rounded mb-4"
              />
              <h2 className="text-xl font-semibold text-green-700">{food.name}</h2>
              <p className="text-gray-600 mb-2">{food.description}</p>
              <Link
                href={`/foods/${id}`}
                className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
