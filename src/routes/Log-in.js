import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "./api";



function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

   const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { token, role } = await login(username, password);

      // Store token in localStorage
      localStorage.setItem('token', token);

      // Navigate to the correct dashboard
      if (role === 'Admin') navigate('/admin-dashboard');
      else if (role === 'HOD') navigate('/hod-dashboard');
      else if (role === 'Staff') navigate('/staff-dashboard');
      else if (role === 'Student') navigate('/student-dashboard');
    } catch (errorMessage) {
      console.log(errorMessage)
      setError(errorMessage);
    }
  };

  // Get role from URL or props
  const location = useLocation();
  const role = new URLSearchParams(location.search).get("role") || "student";

   // Define role-based images
   const roleImages = {
    Admin: "/img/admin.png",
    Hod: "/img/hod.png",
    Staff: "/img/teacher.jpg",
    Student: "/img/student-girl.jpg"
  };

  // Default image in case no role is selected
  const [imageSrc, setImageSrc] = useState(roleImages[role] || roleImages.Student);


  
  
  

  useEffect(() => {
    // Update the image when the role changes (for future expansions)
    
    setImageSrc(roleImages[role] || roleImages.Hod);
    //eslint-disable-next-line
  },[role]);
console.log(role)

  return (
    <div className="flex h-screen bg-blue-100">
      {/* Left Side: Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src={imageSrc}
          alt={`${role}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {role.charAt(0).toUpperCase() + role.slice(1)} Log-In
          </h2>
          <form className="space-y-4">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Log In
            </button>
           {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
