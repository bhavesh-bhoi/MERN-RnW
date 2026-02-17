const Table = ({
  data,
  onEdit,
  onDelete,
  handleSortAZ,
  handleSortZA,
  handleSearch,
}) => {
  return (
    <div className="w-[80%] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4 p-4 mb-4">
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-2 rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors border-none"
            onClick={handleSortAZ}
          >
            A-Z
          </button>
          <button
            className="p-2 rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors border-none"
            onClick={handleSortZA}
          >
            Z-A
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-400 p-2 rounded-md text-md"
            onChange={handleSearch}
          />
        </div>
      </div>
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
