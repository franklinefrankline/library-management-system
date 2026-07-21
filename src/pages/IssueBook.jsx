import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function IssueBook() {
  const { books, issueBook } = useContext(BookContext);

  const availableBooks = books.filter(
    (book) => book.status === "Available"
  );

  return (
    <div>
      <h1>Issue Book</h1>

      {availableBooks.length === 0 ? (
        <p>No books available.</p>
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
            {availableBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <button onClick={() => issueBook(book.id)}>
                    Issue
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

export default IssueBook;