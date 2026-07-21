import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function ReturnBook() {
  const { books, returnBook } = useContext(BookContext);

  const issuedBooks = books.filter(
    (book) => book.status === "Issued"
  );

  return (
    <div>
      <h1>Return Book</h1>

      {issuedBooks.length === 0 ? (
        <p>No books have been issued.</p>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {issuedBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <button onClick={() => returnBook(book.id)}>
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReturnBook;