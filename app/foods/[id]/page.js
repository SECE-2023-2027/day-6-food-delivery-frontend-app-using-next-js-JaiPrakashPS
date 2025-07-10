'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import foodData from '../../data/foodData'; // going one level up to `foods`

export default function FoodDetail({ params }) {
  const food = foodData[params.id];
  const router = useRouter();

  if (!food) return <div className="p-6">Food not found</div>;

  const handleAddToCart = () => {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.push(food);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  router.push('/cart');
};


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
      <h1 className="text-3xl font-bold mb-4">{food.restaurant}</h1>
      <Image
        src={food.image}
        alt={food.name}
        width={600}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{food.description}</p>
      <p className="text-3xl font-bold mb-4">₹{food.price}</p>
      <button
        onClick={handleAddToCart}
        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

