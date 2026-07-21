import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import "../styles/dashboard.css";

function DashboardCards() {
  const { books } = useContext(BookContext);

  const totalBooks = books.length;

  const issuedBooks = books.filter(
    (book) => book.status === "Issued"
  ).length;

  const availableBooks = books.filter(
    (book) => book.status === "Available"
  ).length;

  return (
    <div className="dashboard">

      <h2>Dashboard</h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Books</h3>
          <p>{totalBooks}</p>
        </div>

        <div className="card">
          <h3>Issued Books</h3>
          <p>{issuedBooks}</p>
        </div>

        <div className="card">
          <h3>Available Books</h3>
          <p>{availableBooks}</p>
        </div>

      </div>

    </div>
  );
}

export default DashboardCards;