import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import BookForm from "../components/BookForm";

function EditBook() {
  const { id } = useParams();

  const { books } = useContext(BookContext);

  const selectedBook = books.find(
    (book) => book.id === Number(id)
  );

  return (
    <div>

      <h1>Edit Book</h1>

      <BookForm editBook={selectedBook} />

    </div>
  );
}

export default EditBook;