import React, { useContext } from "react";
import { FaShoppingCart, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contextData } from "../context/ContextApi";
import Search from "./Search";

function Navbar() {
  const { cart } = useContext(contextData);

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 py-4 px-16 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="logo text-white text-3xl font-bold hover:opacity-80"
          >
            My Shopee
          </Link>
          <Search />
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="text-white text-2xl flex items-center gap-2 hover:opacity-80"
            >
              <FaRegUserCircle />
              Login
            </Link>
            <Link
              to="/cart"
              className="text-white text-3xl relative cursor-pointer hover:opacity-80 select-none"
            >
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute text-sm -top-4 -right-4 bg-red-700 rounded-full w-6 h-6 flex justify-center items-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
