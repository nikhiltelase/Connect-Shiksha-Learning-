import React from "react";
import { useLocation } from "react-router-dom";

function OrderSuccess() {
  const { state } = useLocation();
  const { orderDetails, address, totalAmount } = state;

  // Generate a random order ID
  const generateOrderId = () => {
    return Math.random().toString(36).substring(2, 15).toUpperCase();
  };

  const orderId = generateOrderId();

  return (
    <div className="container mx-auto pt-24 px-4 lg:px-0">
      <div className="bg-white p-8 shadow-xl rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-600">
          Order Placed Successfully!
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Order ID: {orderId}
        </h2>
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Order Details</h3>
          <table className="w-full mb-6 border-collapse border border-gray-200">
            <tbody>
              <tr className="bg-gray-100 border border-gray-200">
                <td className="font-semibold p-4">Total Amount</td>
                <td className="p-4">₹{totalAmount}</td>
              </tr>
              <tr className="border border-gray-200">
                <td className="font-semibold p-4">Delivery Address</td>
                <td className="p-4">
                  <p>{address.name}</p>
                  <p>{address.phone}</p>
                  <p>{address.addressLine1}</p>
                  {address.addressLine2 && <p>{address.addressLine2}</p>}
                  <p>
                    {address.city}, {address.state}, {address.zip}
                  </p>
                </td>
              </tr>
              <tr className="bg-gray-100 border border-gray-200">
                <td className="font-semibold p-4">Billing Address</td>
                <td className="p-4">
                  <p>{address.name}</p>
                  <p>{address.phone}</p>
                  <p>{address.addressLine1}</p>
                  {address.addressLine2 && <p>{address.addressLine2}</p>}
                  <p>
                    {address.city}, {address.state}, {address.zip}
                  </p>
                </td>
              </tr>
              <tr className="border border-gray-200">
                <td className="font-semibold p-4">Ordered Items</td>
                <td className="p-4">
                  <ul className="list-disc list-inside">
                    {orderDetails.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item.name} - ₹{item.price.toFixed(2)} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
