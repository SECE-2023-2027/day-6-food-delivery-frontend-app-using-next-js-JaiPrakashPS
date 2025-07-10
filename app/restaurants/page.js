'use client';
import foodData from '../data/foodData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function restaurants() {
    const router = useRouter();
  const restaurants = {};

  for (const [id, item] of Object.entries(foodData)) {
    const restaurantName = item.restaurant;
    if (!restaurants[restaurantName]) {
      restaurants[restaurantName] = [];
    }
    restaurants[restaurantName].push({ id, ...item });
  }
const goToHome = () => {
    router.push('/');
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Restaurants & Their Dishes</h1>
      <button
          onClick={goToHome}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Go to Home
        </button>
      {Object.entries(restaurants).map(([restaurantName, foods]) => (
        <div key={restaurantName} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{restaurantName}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {foods.map((food) => (
              <div key={food.id} className="bg-white shadow rounded-lg overflow-hidden">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-lg font-medium text-gray-800">{food.name}</h3>
                  <p className="text-sm text-gray-600">{food.description}</p>
                  <p className="text-xl font-bold mt-2">₹{food.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
