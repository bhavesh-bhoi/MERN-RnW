const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-center w-[80%]">
      {/* Table */}
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">ID</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Phone</th>
            <th className="border border-gray-400 p-2">Total</th>
            <th className="border border-gray-400 p-2" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* Records */}
          {data.map((item, index) => (
            <tr className="bg-gray-100" key={item.id || index}>
              <td className="border border-gray-400 p-2">{index + 1}</td>
              <td className="border border-gray-400 p-2">{item.name}</td>
              <td className="border border-gray-400 p-2">{item.email}</td>
              <td className="border border-gray-400 p-2">{item.phone}</td>
              <td className="border border-gray-400 p-2">{item.total}</td>
              <td className="border border-gray-400 p-2">
                {/* Edit Button */}
                <button
                  className="border border-gray-400 w-20 p-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600 transition-colors border-none"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
              </td>
              <td className="border border-gray-400 p-2">
                {/* Delete Button */}
                <button
                  className="border border-gray-400 w-20 p-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-colors border-none"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
