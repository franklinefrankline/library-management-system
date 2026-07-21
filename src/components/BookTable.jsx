import BookCard from "./BookCard";

function BookTable({
  books,
  deleteBook,
  issueBook,
  returnBook,
}) {
  if (books.length === 0) {
    return <h3>No Books Found</h3>;
  }

  return (
    <table className="book-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            deleteBook={deleteBook}
            issueBook={issueBook}
            returnBook={returnBook}
          />
        ))}

      </tbody>

    </table>
  );
}

export default BookTable;