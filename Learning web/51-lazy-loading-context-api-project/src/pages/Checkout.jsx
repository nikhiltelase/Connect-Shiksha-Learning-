import React, { useContext, useState } from "react";
import { contextData } from "../context/ContextApi";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";

function Checkout() {
  const { cart, setCart } = useContext(contextData);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [conformAddress, setConformAddress] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });

  const onClose = () => {
    setShowPopup(false);
    setConformAddress(false);
  };
  const onConfirm = () => {
    setShowPopup(false);
    setConformAddress(true);
  };

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
    setShowPopup(true);
    if (conformAddress) {
      navigate("/order-success", {
        state: {
          orderDetails: cart,
          address,
          totalAmount: calculateTotal(),
        },
      });
      setCart([]);
    }
  };

  return (
    <>
      {showPopup ? (
        <Popup
          message={"Is this the correct delivery address?"}
          onClose={onClose}
          onConfirm={onConfirm}
        />
      ) : (
        ""
      )}
      <div className="container mx-auto pt-16 sm:pt-20 lg:pt-24 px-2 lg:px-6">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold sm:mb-4 lg:mb-8 lg:text-center">
          Checkout
        </h1>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 sm:p-6 lg:shadow-lg lg:rounded-lg mb-6 lg:mb-0 w-full flex flex-col justify-between lg:flex-row "
          >
            <div className="w-full">
              <h2 className="text-sm sm:text-xl font-semibold mb-4">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="shadow border-2 border-gray-300 rounded-lg w-full text-gray-700 outline-none p-2 sm:p-3"
                />
                <input
                  type="text"
                  name="phone"
                  value={address.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="shadow border-2 border-gray-300 rounded-lg w-full text-gray-700 outline-none p-2 sm:p-3"
                />
                <input
                  type="text"
                  name="addressLine1"
                  value={address.addressLine1}
                  onChange={handleChange}
                  placeholder="Address Line 1"
                  required
                  className="shadow border-2 border-gray-300 rounded-lg w-full text-gray-700 outline-none p-2 sm:p-3 col-span-1 sm:col-span-2"
                />
                <input
                  type="text"
                  name="addressLine2"
                  value={address.addressLine2}
                  onChange={handleChange}
                  placeholder="Address Line 2"
                  className="shadow border-2 border-gray-300 rounded-lg w-full text-gray-700 outline-none p-2 sm:p-3 col-span-1 sm:col-span-2"
                />
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="shadow border-2 border-gray-300 rounded-lg w-full text-gray-700 outline-none p-2 sm:p-3"
                />
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                  className="shadow border-2 border-gray-300 rounded-lg w-full text-gray-700 outline-none p-2 sm:p-3"
                />
                <input
                  type="text"
                  name="zip"
                  value={address.zip}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  required
                  className="shadow border-2 border-gray-300 rounded-lg w-full text-gray-700 outline-none p-2 sm:p-3"
                />
              </div>
            </div>

            <div className="w-full lg:w-[50%] bg-white shadow-lg rounded p-2 sm:p-6 mt-6 lg:mt-0 lg:ml-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                Price Details
              </h2>
              <div className="flex justify-between mb-4">
                <span className="sm:text-lg">Price ({cart.length} items)</span>
                <span className="sm:text-lg">₹{calculateTotal()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="sm:text-lg">Discount</span>
                <span className="sm:text-lg text-green-500">- ₹0</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="sm:text-lg">Delivery Charges</span>
                <span className="sm:text-lg text-green-500">Free</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="sm:text-lg font-bold">Total Amount</span>
                <span className="sm:text-lg font-bold">
                  ₹{calculateTotal()}
                </span>
              </div>
              <button className="bg-orange-500 hover:bg-orange-700 text-white text-lg sm:text-xl font-bold p-2 sm:py-4 w-full rounded transition-colors duration-300">
                Place Order
              </button>
              <p className="mt-4 text-green-500">
                You will save ₹0 on this order
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
