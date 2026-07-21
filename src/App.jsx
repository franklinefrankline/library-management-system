import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/issue-book" element={<IssueBook />} />
            <Route path="/return-book" element={<ReturnBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;