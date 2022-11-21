import React, { useState } from "react";

const BookEdit = ({ book, newBookEditHandler }) => {
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
