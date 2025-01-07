import React from "react";

const StudentDashboard = () => {
  const attendance = [
    { subject: "Math", attended: 18, total: 20 },
    { subject: "Science", attended: 16, total: 20 },
    { subject: "English", attended: 19, total: 20 },
  ];

  const testResults = [
    { subject: "Math", score: "85/100" },
    { subject: "Science", score: "78/100" },
    { subject: "English", score: "92/100" },
  ];

  const timetable = [
    { day: "Monday", subjects: ["Math", "Science", "English"] },
    { day: "Tuesday", subjects: ["Math", "Science", "Physical Education"] },
    { day: "Wednesday", subjects: ["English", "History", "Math"] },
  ];

  const news = [
    "Upcoming college fest on 15th January!",
    "Science fair submissions due by 10th January.",
    "Library hours extended for exam prep.",
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Attendance</h2>
        <table className="table-auto w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Attended</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2">{record.subject}</td>
                <td className="px-4 py-2">{record.attended}</td>
                <td className="px-4 py-2">{record.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Test Results</h2>
        <ul className="bg-white p-4 rounded shadow">
          {testResults.map((result, index) => (
            <li key={index} className="mb-2">
              {result.subject}: <strong>{result.score}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Timetable</h2>
        <ul className="bg-white p-4 rounded shadow">
          {timetable.map((entry, index) => (
            <li key={index} className="mb-2">
              {entry.day}: {entry.subjects.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">College News</h2>
        <ul className="bg-white p-4 rounded shadow">
          {news.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
