import React, { useContext, useState } from "react";
import { contextData } from "../context/ContextApi";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, setCart } = useContext(contextData);
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order-success", {
      state: {
        orderDetails: cart,
        address,
        totalAmount: calculateTotal(),
      },
    });
    setCart([]);
  };

  return (
    <div className="container mx-auto pt-24 px-24 flex flex-col lg:flex-row">
      {/* Address Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-3/4 p-4 bg-white shadow-xl rounded-lg"
      >
        <h2 className="text-2xl font-semibold mb-6">Delivery Address</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              value={address.addressLine1}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              value={address.addressLine2}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>
            <div className="w-1/3">
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>
            <div className="w-1/3">
              <label className="block text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={address.zip}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-fit px-6 bg-orange-500 hover:bg-orange-700 text-white text-xl font-bold py-4 rounded transition-colors duration-300"
        >
          Place Order
        </button>
      </form>

      {/* Price Details */}
      <div className="w-full lg:w-1/4 bg-white shadow-xl rounded-lg p-6 lg:ml-6 mt-6 lg:mt-0">
        <h2 className="text-2xl font-semibold mb-6">Price Details</h2>
        <div className="flex justify-between mb-4">
          <span className="text-lg">Price ({cart.length} items)</span>
          <span className="text-lg">₹{calculateTotal()}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg">Discount</span>
          <span className="text-lg text-green-500">0</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg">Delivery Charges</span>
          <span className="text-lg text-green-500">Free</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-bold">Total Amount</span>
          <span className="text-lg font-bold">₹{calculateTotal()}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
