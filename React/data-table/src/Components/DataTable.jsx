import { useState, useEffect } from "react";
import Table from "./Table";

const DataTable = () => {
  // State Management
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
  });

  // Input Fields
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [total, setTotal] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Local Storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!id || !name || !email || !phone || !total) {
      alert("Please fill all fields");
      return;
    }

    // Form Data
    const formData = {
      id,
      name,
      email,
      phone,
      total,
    };

    // Update or Add Record
    if (isEditing) {
      setData(data.map((item) => (item.id === id ? formData : item)));
      setIsEditing(false);
    } else {
      if (data.some((item) => item.id === id)) {
        alert("ID already exists!");
        return;
      }
      // Add Record
      setData([...data, formData]);
    }

    // Clear Input Fields After Form Submit
    setId("");
    setName("");
    setEmail("");
    setPhone("");
    setTotal("");
  };

  // Edit Record
  const handleEdit = (item) => {
    setId(item.id);
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
    setTotal(item.total);
    setIsEditing(true);
  };

  // Delete Record
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 select-none">
      <h1 className="text-2xl font-bold my-4 uppercase">DataTable</h1>
      {/* Form */}
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4 p-7"
        >
          <input
            type="text"
            placeholder="ID"
            className="border border-gray-400 p-2 rounded-md text-md"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={isEditing}
          />
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-400 p-2 rounded-md text-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 p-2 rounded-md text-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-400 p-2 rounded-md text-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Total"
            className="border border-gray-400 p-2 rounded-md text-md"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <button
            type="submit"
            className={`border-none w-20 p-2 text-white rounded-md cursor-pointer transition-colors ${
              isEditing
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </form>
      </div>
      <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default DataTable;
