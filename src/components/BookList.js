import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBookById, bookEditHandler }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <BookShow
              book={book}
              deleteBookById={deleteBookById}
              bookEditHandler={bookEditHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
