import React, { useState } from "react";

const StaffDashboard = () => {
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    const rollNo = prompt("Enter Student Roll Number:");
    const name = prompt("Enter Student Name:");
    const dob = prompt("Enter Student Date of Birth (YYYY-MM-DD):");

    if (rollNo && name && dob) {
      setStudents([...students, { rollNo, name, dob }]);
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Staff Dashboard</h1>
      <button
        onClick={addStudent}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Student
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Student List</h2>
        <table className="table-auto w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Roll Number</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2">{student.rollNo}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffDashboard;

