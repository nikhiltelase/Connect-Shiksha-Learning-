import React from 'react'
import { Link } from 'react-router-dom';

function CategoryLinks() {
  return (
    <div>
        <div className="bg-white py-2 px-16 shadow-md mt-20">
        <div className="container mx-auto flex justify-between items-center">
          {['Top Deals', 'Mobiles & Tablets', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Furniture', 'Travel', 'Grocery'].map((category) => (
            <Link
              to={`/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="text-indigo-500 text-lg font-semibold hover:text-indigo-700 transition duration-300"
              key={category}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryLinks