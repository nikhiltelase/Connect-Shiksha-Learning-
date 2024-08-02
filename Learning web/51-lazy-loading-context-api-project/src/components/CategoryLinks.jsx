import React from 'react';
import { Link } from 'react-router-dom';

function CategoryLinks() {
  const categories = [
    { link: 'Category', img: 'https://rukminim1.flixcart.com/flap/480/450/image/033f3268031fa0ba.jpg?q=20' },
    { link: 'Top Deals', img: 'https://rukminim1.flixcart.com/flap/480/450/image/0f3d008be60995d4.jpg?q=20' },
    { link: 'Mobiles & Tablets', img: 'https://rukminim1.flixcart.com/flap/480/450/image/42f9a853f9181279.jpg?q=20' },
    { link: 'Fashion', img: 'https://rukminim1.flixcart.com/flap/480/450/image/f07bb3e1c1392b47.jpg?q=20' },
    { link: 'Electronics', img: 'https://rukminim1.flixcart.com/flap/480/450/image/913e96c334d04395.jpg?q=20' },
    { link: 'Home & Kitchen', img: 'https://rukminim1.flixcart.com/flap/480/450/image/4be8a679014497f0.png?q=20' },
    { link: 'Beauty', img: 'https://rukminim1.flixcart.com/flap/480/450/image/6ecb75e51b607880.jpg?q=20' },
    { link: 'Furniture', img: 'https://rukminim1.flixcart.com/flap/480/450/image/89d809684711712a.jpg?q=20' },
    { link: 'Travel', img: 'https://rukminim1.flixcart.com/fk-p-flap/480/450/image/4b0a064d53b4ff28.jpg?q=20' },
    { link: 'Grocery', img: 'https://rukminim1.flixcart.com/flap/480/450/image/356d37e9512c7fcb.jpg?q=20' }
  ];

  return (
    <div className="mt-[3.1rem] mb-2 sm:mt-[4rem] lg:mt-14">
      <div className="bg-white sm:px-8 lg:px-16 shadow-2xl">
        <div className="container mx-auto py-2 sm:py-4">
          <div className="flex overflow-x-auto no-scrollbar lg:justify-between">
            {categories.map((category) => (
              <Link
                to={`/category/${category.link}`}
                className="flex-none m-1 sm:mb-0"
                key={category.link}
              >
                <img src={category.img} alt={category.link} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
               
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryLinks;
