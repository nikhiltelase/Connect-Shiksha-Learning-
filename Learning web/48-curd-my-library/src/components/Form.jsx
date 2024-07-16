import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Form({ addBook, edit, editBookIndex, booksList }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    rating: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (edit) {
      setBook(booksList[editBookIndex]);
    }
  }, [edit]);

  function handleChange(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (edit) {
      booksList[editBookIndex] = book
    } else {
      addBook(book);
    }
    setBook({
      title: "",
      author: "",
      rating: "",
    });
    navigate("/");
  }

  return (
    <div className="form-container top-0 w-full h-screen">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center w-[28%] h-[70%] bg-indigo-400 rounded-3xl">
          <div className="w-min">
            <form onSubmit={handleSubmit} method="post">
              <label className="text-2xl text-white" htmlFor="title">
                Book Title
              </label>
              <input
                className="mb-7 mt-2 w-[300px] h-[2%] rounded-2xl px-3 py-2 text-2xl outline-none"
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                autoFocus
                required
              />

              <label className="text-2xl text-white" htmlFor="author">
                Author
              </label>
              <input
                className="mb-7 mt-2 w-[300px] h-[2%] rounded-2xl px-3 py-2 text-2xl outline-none"
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                required
              />

              <label className="text-2xl text-white" htmlFor="rating">
                Rating
              </label>
              <input
                className="mb-7 mt-2 w-[300px] h-[2%] rounded-2xl px-3 py-2 text-2xl outline-none"
                type="text"
                name="rating"
                value={book.rating}
                onChange={handleChange}
                required
              />
              <br />

              <button
                type="submit"
                className="outline-none bg-indigo-500 p-2 text-white font-bold rounded-2xl text-2xl"
              >
                {edit ? "Edit" : "Add"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
