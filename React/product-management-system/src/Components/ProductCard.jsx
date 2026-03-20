import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="glass-card product-card">
      {/* Product Image */}
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt=""
        className="card-img"
      />

      {/* Product Details */}
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>

        <p className="card-price">₹ {product.price}</p>

        <p className="text-muted">{product.category || "No category"}</p>

        {/* Edit and Delete Buttons */}
        <div className="card-actions">
          <button onClick={() => onEdit(product)} className="btn btn-secondary">
            <FaEdit />
          </button>

          <button
            onClick={() => onDelete(product.id)}
            className="btn btn-danger"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
