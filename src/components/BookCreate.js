import React, { useState } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("");
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onSubmitHandler}>
        <label>Title:</label>
        <input value={title} onChange={onChangeHandler} className="input" />
        <button className="button">Create a Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
