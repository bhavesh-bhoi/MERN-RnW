// React Icons
import { FaSearch, FaEye, FaPlus } from "react-icons/fa";

export default function Navbar({ setPage, search, setSearch }) {
  return (
    <div className="glass-card navbar">
      <h1 className="logo">PRODUCT MANAGEMENT SYSTEM</h1>

      <div className="nav-actions">
        {/* Search Bar */}
        <div style={{ position: "relative" }}>
          <FaSearch
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              color: "#9ca3af",
            }}
          />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
            style={{ paddingLeft: "2rem", maxWidth: "200px" }}
          />
        </div>
        {/* View Products */}
        <button className="btn btn-secondary" onClick={() => setPage("view")}>
          View <FaEye />
        </button>

        {/* Add Products */}
        <button className="btn btn-primary" onClick={() => setPage("add")}>
          Add <FaPlus />
        </button>
      </div>
    </div>
  );
}
