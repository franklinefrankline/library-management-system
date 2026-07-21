import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import SearchBar from "../components/SearchBar";
import BookTable from "../components/BookTable";

function Books() {
  const { books, deleteBook, issueBook, returnBook } =
    useContext(BookContext);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Books</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <BookTable
        books={filteredBooks}
        deleteBook={deleteBook}
        issueBook={issueBook}
        returnBook={returnBook}
      />

    </div>
  );
}

export default Books;