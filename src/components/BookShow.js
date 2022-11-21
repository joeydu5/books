import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBookById, bookEditHandler }) => {
  const [showEdit, setShowEdit] = useState(false);
  const deleteHandler = () => {
    deleteBookById(book.id);
  };
  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  const newBookEditHandler = (id, newTitle) => {
    bookEditHandler(id, newTitle);
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="book pictures"
      />
      {showEdit ? (
        <BookEdit book={book} newBookEditHandler={newBookEditHandler} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button className="edit" onClick={editHandler}>
          Edit
        </button>
        <button className="delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
