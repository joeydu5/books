import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-context-books";

const BookList = () => {
  const { books } = useBooksContext();
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <BookShow book={book} />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
