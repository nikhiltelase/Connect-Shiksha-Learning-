import React, { useContext } from "react";
import { contextData } from "../context/ContextApi";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  const { addToCart, isItemInCart } = useContext(contextData);

  return (
    <>
      <div className="container w-full pt-7 mb-10 p-6 bg-gray-100 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-between p-6 transform transition-transform duration-500 hover:shadow-2xl"
            >
              <Link to={`/item/${item.id}`} className="z-10">
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    className="w-full h-60 absolute z-10 bg-white hover:opacity-0 object-contain mb-4 "
                    src={item.imgUrl[0]}
                    alt={item.name}
                  />
                  <img
                    className="w-full h-60 relative bg-white top-0 left-0 object-contain mb-4 "
                    src={item.imgUrl[1] ? item.imgUrl[1] : item.imgUrl[0]}
                    alt={item.name}
                  />
                </div>
              </Link>
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {item.name}
                </div>
                <p className="text-gray-700 text-lg">
                  ₹{item.price.toFixed(2)}
                </p>
                <Link to={`/category/${item.category}`}>
                  <p className="text-gray-500 text-sm category-text transition-opacity duration-300">
                    {item.category}
                  </p>
                </Link>
              </div>
              <div className="absolute inset-0 flex justify-center items-end pb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => addToCart(item)}
                  className={`${
                    isItemInCart(item.id)
                      ? "bg-green-500 hover:bg-green-700"
                      : "bg-indigo-500 hover:bg-indigo-700"
                  } text-white font-bold py-2 px-4 rounded-full transform transition-transform duration-500 hover:scale-110`}
                >
                  {isItemInCart(item.id) ? "Add more" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {items.length === 0 && (
          <h1 className="text-lg text-red-500 mt-6">Not found</h1>
        )}
      </div>
    </>
  );
}

export default ItemList;
