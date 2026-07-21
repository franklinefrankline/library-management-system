import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import "../styles/form.css";

function BookForm({ editBook }) {
  const { addBook, editBook: updateBook } = useContext(BookContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
    }
  }, [editBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      alert("Please fill all fields");
      return;
    }

    if (editBook) {
      updateBook({
        ...editBook,
        title,
        author,
      });
      alert("Book Updated Successfully");
    } else {
      addBook({
        title,
        author,
      });
      alert("Book Added Successfully");
    }

    navigate("/books");
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button type="submit">
        {editBook ? "Update Book" : "Add Book"}
      </button>

    </form>
  );
}

export default BookForm;