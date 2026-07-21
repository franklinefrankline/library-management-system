import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Menu</h2>

      <ul>

        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/books">📚 Books</Link>
        </li>

        <li>
          <Link to="/add-book">➕ Add Book</Link>
        </li>

        <li>
          <Link to="/issue-book">📖 Issue Book</Link>
        </li>

        <li>
          <Link to="/return-book">🔄 Return Book</Link>
        </li>

        <li>
          <Link to="/login">🔐 Login</Link>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;