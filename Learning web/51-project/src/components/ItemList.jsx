import React, { useContext } from "react";
import { contextData } from "../context/ContextApi";

function ItemList() {
  const { items, cart, setCart } = useContext(contextData);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <>
      <div className="container w-full pt-24 mb-10 p-6 bg-gray-100 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between p-6 hover:shadow-xl transition duration-300"
            >
              <img
                className="w-full h-60 object-contain"
                src={item.imgUrl}
                alt={item.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800 text-center">
                  {item.name}
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemList;
