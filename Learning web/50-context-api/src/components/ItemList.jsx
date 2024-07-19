import React, { useContext } from "react";
import { contextData } from "../context/ContextApi";

function ItemList() {
  const { items, cart, setCart } = useContext(contextData);

  function addToCart(item) {
    setCart([...cart, item]);
  }
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="w-80 bg-white rounded overflow-hidden shadow-2xl m-5"
          >
            <img className="h-72 w-full bg-cover p-6" src={item.imgUrl} />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{item.name}</div>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ItemList;
