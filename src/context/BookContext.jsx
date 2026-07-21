import { createContext, useState, useEffect } from "react";
import booksData from "../data/books";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : booksData;
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Add Book
  const addBook = (book) => {
    setBooks([
      ...books,
      {
        id: Date.now(),
        ...book,
        status: "Available",
      },
    ]);
  };

  // Delete Book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Edit Book
  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };

  // Issue Book
  const issueBook = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: "Issued" }
          : book
      )
    );
  };

  // Return Book
  const returnBook = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: "Available" }
          : book
      )
    );
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        deleteBook,
        editBook,
        issueBook,
        returnBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};