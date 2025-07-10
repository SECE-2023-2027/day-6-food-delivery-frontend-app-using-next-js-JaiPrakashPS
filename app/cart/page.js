'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedItems);
  }, []);

  const goToHome = () => {
    router.push('/');
  };

  const handleCheckout = () => {
    localStorage.removeItem('cart'); 
    setCartItems([]); 
    alert('Your order will be delivered soon 🚚');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={goToHome}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Go to Home
        </button>

        {cartItems.length > 0 && (
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
          >
            Checkout
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="rounded mb-4"
              />
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-xl font-bold mt-2">₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
