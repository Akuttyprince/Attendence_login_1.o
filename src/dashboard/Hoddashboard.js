import React, { useState } from "react";

const HODDashboard = () => {
  const [staff, setStaff] = useState([]);
  const [classrooms, setClassrooms] = useState([]);

  const addStaff = () => {
    const newStaff = prompt("Enter Staff Name:");
    if (newStaff) {
      setStaff([...staff, newStaff]);
    }
  };

  const addClassroom = () => {
    const newClassroom = prompt("Enter Classroom Name:");
    if (newClassroom) {
      setClassrooms([...classrooms, newClassroom]);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">HOD Dashboard</h1>
      <div className="mb-6">
        <button
          onClick={addStaff}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
        >
          Add Staff
        </button>
        <button
          onClick={addClassroom}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Classroom
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Staff List</h2>
        <ul>
          {staff.map((staffName, index) => (
            <li
              key={index}
              className="p-2 bg-white rounded shadow mb-2"
            >
              {staffName}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Classrooms</h2>
        <ul>
          {classrooms.map((className, index) => (
            <li
              key={index}
              className="p-2 bg-white rounded shadow mb-2"
            >
              {className}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HODDashboard;
