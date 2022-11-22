import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createBook = async (title) => {
    console.log("title", title);
    if (title && title !== " ") {
      const res = await axios.post("http://localhost:3001/books", {
        title,
      });
      console.log(res);
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
    <div>
      <h1>Reading List</h1>
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
