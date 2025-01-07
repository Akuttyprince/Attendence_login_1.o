import React, { useState } from "react";

const AdminDashboard = () => {
  const [hods, setHods] = useState([]);

  const addHod = () => {
    const newHod = prompt("Enter HOD Name:");
    if (newHod) {
      setHods([...hods, newHod]);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <button
        onClick={addHod}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add HOD
      </button>

      <ul className="mt-4">
        {hods.map((hod, index) => (
          <li key={index} className="p-2 bg-white rounded shadow mb-2">
            {hod}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
