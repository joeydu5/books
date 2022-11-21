import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("title", title);
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 10000),
        title,
      },
    ];
    if (title !== "") {
      setBooks(updatedBooks);
    }
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const bookEditHandler = (id, newTitle) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(newBooks);
  };
  return (
    <div>
      <BookCreate createBook={createBook} />
      <BookList
        books={books}
        deleteBookById={deleteBookById}
        bookEditHandler={bookEditHandler}
      />
    </div>
  );
}

export default App;
