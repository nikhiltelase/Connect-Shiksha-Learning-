import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Books from "./pages/Books";
import Form from "./components/Form";

function App() {
  const [booksList, setBooksList] = useState([
    {
      title: "gita",
      author: "krishna",
      rating: "9.5",
    },
  ]);
  const [editBookIndex, setEditBookIndex] = useState(NaN);

  const addBook = (book) => {
    setBooksList([...booksList, book]);
  };

  const updateBookList = (bookList) => {
    setBooksList(bookList);
  };

  const getEditBookIndex = (index) => {
    setEditBookIndex(index)
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Books
                booksList={booksList}
                updateBookList={updateBookList}
                getEditBookIndex={getEditBookIndex}
              />
            }
          />
          <Route path="/add" element={<Form addBook={addBook} />} />
          <Route
            path="/edit"
            element={
              <Form
                edit={true}
                editBookIndex={editBookIndex}
                booksList={booksList}

              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
