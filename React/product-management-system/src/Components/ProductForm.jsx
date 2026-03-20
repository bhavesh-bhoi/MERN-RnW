// ProductForm.jsx
import { useEffect, useState } from "react";
// React Icons
import { FaCheck, FaTimes } from "react-icons/fa";

export default function ProductForm({
  setProducts,
  editProduct,
  setEditProduct,
  setPage,
}) {
  // State variables
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // Edit product
  useEffect(() => {
    if (editProduct) {
      setName(editProduct.name || "");
      setPrice(editProduct.price || "");
      setCategory(editProduct.category || "");
      setImage(editProduct.image || "");
    } else {
      resetForm();
    }
  }, [editProduct]);

  // Reset form
  const resetForm = () => {
    setName("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  // Submit product
  const handleSubmit = () => {
    if (!name || !price) {
      alert("Please fill in all required fields");
      return;
    }

    // Update product
    if (editProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editProduct.id ? { ...p, name, price, category, image } : p,
        ),
      );
      setEditProduct(null);
    } else {
      // Add product
      const newProduct = {
        id: Date.now(),
        name: name.trim(),
        price: price.trim(),
        category: category.trim(),
        image:
          image.trim() || "https://via.placeholder.com/300x200?text=No+Image",
      };
      setProducts((prev) => [...prev, newProduct]);
    }

    setPage("home");
    resetForm();
  };

  // Cancel product
  const handleCancel = () => {
    setEditProduct(null);
    setPage("home");
    resetForm();
  };

  return (
    <div className="app-container">
      <div className="glass-card form-card">
        {/* Form title */}
        <h2 className="form-title">
          {editProduct ? "EDIT PRODUCT" : "ADD NEW PRODUCT"}
        </h2>

        {/* Form fields */}
        <div className="form-group">
          <label className="form-label">Product Name *</label>
          <input
            type="text"
            className="input"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Price field */}
        <div className="form-group">
          <label className="form-label">Price *</label>
          <input
            type="number"
            className="input"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Category field */}
        <div className="form-group">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="input"
            placeholder="Enter category (e.g., Electronics, Clothing)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        {/* Image URL field */}
        <div className="form-group">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="input"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        {/* Form actions */}
        <div className="form-actions">
          <button onClick={handleSubmit} className="btn btn-primary">
            {editProduct ? <FaCheck /> : <FaCheck />}
          </button>

          <button onClick={handleCancel} className="btn btn-secondary">
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}
