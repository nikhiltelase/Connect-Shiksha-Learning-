import React, { useContext } from "react";
import { contextData } from "../../../51-project/src/context/ContextApi";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function CartList() {
  const { cart, setCart } = useContext(contextData);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(itemIndex) {
    const newCart = cart.filter((item, index) => {
        return index !== itemIndex
    })
    setCart(newCart)
  }

  return (
    <>
    <Navbar />
      <div className="pt-24 container w-full  mb-10 p-6 bg-slate-200 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center">My Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="max-w-sm p-10 rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between"
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
                <div className="px-6 pb-4 flex justify-between">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add More
                  </button>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 w-full text-2xl text-center">
              Your cart is empty.{" "}
              <Link to="/" className="text-blue-600 underline">
                Shop now
              </Link>
            </p>
          )}
        </div>
        {cart.length > 0 && (
          <button className="bg-blue-500 mt-20 hover:bg-blue-700 text-3xl text-white font-bold py-5 px-10 rounded">
            Buy now
          </button>
        )}
      </div>
    </>
  );
}

export default CartList;
