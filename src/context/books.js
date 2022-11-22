import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const createBook = async (title) => {
    if (title && title !== " ") {
      const res = await axios.post("http://localhost:3001/books", {
        title,
      });
      if (res.status === 201) {
        const updatedBooks = [...books, res.data];
        setBooks(updatedBooks);
      }
    }
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const bookEditHandler = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    if (res.data) {
      const newBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...res.data };
        }
        return book;
      });
      setBooks(newBooks);
    }
  };
  return (
    <BooksContext.Provider
      value={{ books, fetchData, createBook, deleteBookById, bookEditHandler }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
