import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 pt-3">
      <div className="max-w-2xl mx-auto text-white py-2 sm:py-10">
        <div className="text-center">
          <h3 className="text-2xl mb-3 sm:text-3xl">Download our app</h3>
          <p className="text-sm sm:text-base">Shop smarter with exclusive offers and seamless shopping experience.</p>
          <div className="flex flex-col items-center px-16 mt-3 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border w-full rounded-lg px-4 py-2 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-6 sm:w-7"
                alt="Google Play"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm sm:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border w-full rounded-lg px-4 py-2 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-6 sm:w-7"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm sm:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col items-center space-y-4 text-sm text-gray-400 sm:flex-row sm:justify-between sm:space-y-0">
          <p className="order-2 sm:order-1">&copy; My Shoppee, 2024.</p>
          <div className="order-1 sm:order-2 space-x-2">
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="border-l pl-2 hover:underline">Contact us</a>
            <a href="#" className="border-l pl-2 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
