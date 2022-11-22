import React, { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ newBookEditHandler, book }) => {
  //   const { book } = useContext(BooksContext);
  const [bookTitle, setBookTitle] = useState(book.title);
  const onChangeHandler = (e) => {
    setBookTitle(e.target.value);
  };
  const confirmEditHandler = (e) => {
    e.preventDefault();
    newBookEditHandler(book.id, bookTitle);
  };
  return (
    <div>
      <form onSubmit={confirmEditHandler}>
        <input onChange={onChangeHandler} value={bookTitle} />
        <button className="button">Confirm</button>
      </form>
    </div>
  );
};

export default BookEdit;
