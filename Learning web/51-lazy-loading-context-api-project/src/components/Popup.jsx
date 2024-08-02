import React from "react";

function Popup({ message, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-2 sm:p-6 rounded shadow-xl w-60 sm:w-96">
        <h2 className="text-sm sm:text-xl font-bold mb-4">{message}</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-3 sm:px-4 sm:py-2 rounded hover:bg-blue-600 transition"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-3 sm:px-4 sm:py-2 rounded hover:bg-gray-400 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
