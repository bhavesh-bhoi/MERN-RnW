// App.js
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import ProductForm from "./Components/ProductForm";
import ProductCard from "./Components/ProductCard";

export default function App() {
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) setProducts(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== deleteId));
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setPage("add");
  };

  return (
    <div className="app-container">
      <Navbar setPage={setPage} search={search} setSearch={setSearch} />

      {/* Add Products */}
      <div style={{ marginTop: "2rem" }}>
        {page === "add" && (
          <ProductForm
            setProducts={setProducts}
            editProduct={editProduct}
            setEditProduct={setEditProduct}
            setPage={setPage}
          />
        )}

        {/* View Products */}
        {(page === "home" || page === "view") && (
          <>
            <h2
              style={{
                marginBottom: "1.5rem",
                fontSize: "1.5rem",
                fontWeight: "600",
                background: "linear-gradient(135deg, var(--accent), #8b5cf6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {products.length === 0
                ? "No Products Yet"
                : `All Products (${products.length})`}
            </h2>

            <div className="grid-3">
              {products.length === 0 && (
                <div className="empty-state">
                  <p>
                    No products yet. Click "Add" to create your first product!
                  </p>
                </div>
              )}

              {products
                .filter((p) =>
                  p.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                ))}
            </div>
          </>
        )}
      </div>

      {/* Delete Modal */}
      {deleteId && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              maxWidth: "400px",
              width: "90%",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>
              Are you sure you want to delete?
            </h3>

            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <button onClick={confirmDelete} className="btn btn-danger">
                Delete
              </button>

              <button onClick={cancelDelete} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
