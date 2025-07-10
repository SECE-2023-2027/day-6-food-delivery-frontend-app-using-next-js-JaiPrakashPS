'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const restaurants = [
    { name: 'The living room coimbatore', image: '/images/first_res.jpg' },
    { name: 'KOVE', image: '/images/second_res.webp' },
    { name: 'Heights Rooftop Restaurant', image: '/images/third_res.webp' },
    { name: 'The Waterfall Restaurant', image: '/images/four_res.webp' },
    { name: 'Thamboora Restaurant Trichy', image: '/images/fifth_res.webp' },
  ];

  const foods = [
    { id: 1, name: 'Masala Dosa', image: '/images/dosa.webp' },
    { id: 2, name: 'Briyani', image: '/images/briyani.jpeg' },
    { id: 3, name: 'Parotta', image: '/images/poratta.jpg' },
    { id: 4, name: 'Idiyappam', image: '/images/idiyappam.jpeg' },
    { id: 5, name: 'Meals', image: '/images/meals.jpg' },
    { id: 6, name: 'Burger', image: '/images/burger.jpg' },
    { id: 7, name: 'Pasta', image: '/images/pasta.jpg' },
    { id: 9, name: 'Paneer Butter Masala', image: '/images/panner.webp' },
    { id: 10, name: 'Samosa', image: '/images/Samosa.jpg' },
    { id: 11, name: 'Chole Bhature', image: '/images/chole.jpg' },
    { id: 12, name: 'Pani Puri', image: '/images/panipuri.jpg' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">Top restaurant chains in Tamil Nadu</h2>
      <Slider {...settings}>
  {restaurants.map((item, index) => (
    <Link key={index} href="/restaurants">
      <div className="px-2 cursor-pointer">
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-2 text-center font-medium text-gray-800">
            {item.name}
          </div>
        </div>
      </div>
    </Link>
  ))}
</Slider>


      <h2 className="text-2xl font-semibold mt-12 mb-6">Popular Foods</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {foods.map((food) => (
          <Link key={food.id} href={`/foods/${food.id}`}>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer">
              <Image
                src={food.image}
                alt={food.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-center font-medium text-gray-800">{food.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
