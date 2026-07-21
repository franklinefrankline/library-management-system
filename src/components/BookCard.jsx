import { Link } from "react-router-dom";

function BookCard({
  book,
  deleteBook,
  issueBook,
  returnBook,
}) {
  return (
    <tr>

      <td>{book.id}</td>

      <td>{book.title}</td>

      <td>{book.author}</td>

      <td>{book.status}</td>

      <td>

        <Link to={`/edit-book/${book.id}`}>
          <button>Edit</button>
        </Link>

        <button
          onClick={() => deleteBook(book.id)}
        >
          Delete
        </button>

        {book.status === "Available" ? (
          <button
            onClick={() => issueBook(book.id)}
          >
            Issue
          </button>
        ) : (
          <button
            onClick={() => returnBook(book.id)}
          >
            Return
          </button>
        )}

      </td>

    </tr>
  );
}

export default BookCard;