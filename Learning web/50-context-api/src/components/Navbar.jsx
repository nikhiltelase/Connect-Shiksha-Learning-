import React from "react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { contextData } from "../context/ContextApi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(contextData);
  return (
    <nav className="bg-blue-500 p-8 px-16">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
          <div className="text-white text-2xl font-semibold">My shop</div>
        </Link>
        <Link to={"/cart"}>
          <div className="text-white text-3xl pr-10 relative cursor-pointer">
            <FaShoppingCart />
            {cart.length > 0 ? (
              <span className="absolute text-2xl -top-5 left-4 bg-red-700 rounded-full w-8 h-8 flex justify-center items-center">
                {cart.length}
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
