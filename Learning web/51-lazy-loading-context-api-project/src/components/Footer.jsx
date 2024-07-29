import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Download our app</h3>
          <p>Shop smarter with exclusive offers and seamless shopping experience.</p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200 ">Download on</p>
                <p className="text-sm md:text-base ">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; My Shoppee, 2024.</p>
          <div className="order-1 md:order-2">
            <a href="#" className="px-2 hover:underline">About us</a>
            <a href="#" className="px-2 border-l hover:underline">Contact us</a>
            <a href="#" className="px-2 border-l hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
