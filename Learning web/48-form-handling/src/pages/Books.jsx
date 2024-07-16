import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";

function Books({ booksList, updateBookList, getEditBookIndex }) {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    getEditBookIndex(index)
    navigate('/edit')
  };

  const handleDelete = (index) => {
    const newBookList = booksList.filter((book, i) => i !== index)
    updateBookList(newBookList)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-indigo-500 p-6">
        <h1 className="text-4xl font-semibold text-white text-center">My Library</h1>
      </header>
      <main className="w-full max-w-3xl mt-10">
        {booksList.map((book, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold capitalize">{book.title}</h2>
              <p className="text-gray-700 capitalize">Author: {book.author}</p>
              <p className="text-gray-700">Rating: {book.rating}/10</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleEdit(index)}
                className="text-indigo-500 hover:text-indigo-600 hover:scale-125"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-indigo-500 hover:text-indigo-600 hover:scale-110 "
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <Link to="/add">
            <button className="p-3 mb-10 bg-indigo-600 font-semibold text-white rounded-3xl hover:bg-indigo-700">
              Add New Book
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Books;
