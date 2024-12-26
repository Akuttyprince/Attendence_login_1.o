import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/Log-in";
import Dashboard from "./routes/Dashboard";
import AdminDashboard from "./dashboard/Admindashboard";
import StudentDashboard from "./dashboard/Studentsdashboard";
import StaffDashboard from "./dashboard/Staffdashboard";
import HODDashboard from "./dashboard/Hoddashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/hod-dashboard" element={<HODDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
