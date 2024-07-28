import React from 'react'
import { Link } from 'react-router-dom';

function CategoryLinks() {
  const categories = ['Top Deals', 'Mobiles & Tablets', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Furniture', 'Travel', 'Grocery']
  return (
    <div>
        <div className="bg-white px-16 shadow-2xl mt-[4.5rem] mb-2">
        <div className="container mx-auto flex justify-between items-center">
          {categories.map((category) => (
            <Link
              to={`/category/${category}`}
              className="font-[500] hover:text-blue-700 transition duration-800"
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