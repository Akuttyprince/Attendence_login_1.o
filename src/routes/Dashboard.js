import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Tailwind Heroicons



function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const navigate = useNavigate();

  const navigateToLogin = (role) => {
    navigate(`/login?role=${role}`);
  
 
    // Replace this alert with navigation logic, e.g., using React Router:
    // navigate(`/${role.toLowerCase()}-login`);
  };
  

  return (
    <div className="bg-blue-200 h-screen flex flex-col ">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
                {/* Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="p-2 text-gray-600 bg-gray-100 rounded-md shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isOpen ? (
                    <XIcon className="w-12 h-6" />
                  ) : (
                    <MenuIcon className="w-12 h-600" />
                  )}
                </button>
          
                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute top-12 left-0 z-10 w-48 p-4 bg-black text-white-500 border rounded-lg shadow-md">
                    <ul className="space-y-2 text-gray-400">
                      <li className="hover:text-blue-500">
                        <a href="#about-us">About Us</a>
                      </li>
                      <li className="hover:text-blue-500">
                        <a href="#services">Services</a>
                      </li>
                      <li className="hover:text-blue-500">
                        <a href="#faq">FAQ</a>
                      </li>
                      <li className="hover:text-blue-500">
                        <a href="#how-to-use">How to Use</a>
                      </li>
                      <li className="hover:text-blue-500">
                        <a href="#features">Features</a>
                      </li>
                      <li className="hover:text-blue-500">
                        <a href="#notifications">Notifications</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
          <img
            src="/img/clg.png"
            alt="Logo"
            className="rounded-full w-12 h-12"
          />
          <span className="text-lg font-bold text-gray-700">
            Attendance System
          </span>
        </div>
        {/* Login Button */}
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Log In
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">
          Welcome to the Attendance Dashboard
        </h1>
      </main>

      {/* Login Options Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-gray-700">Log In As:</h2>
            <div className="space-y-3">
              {["Admin", "HOD", "Staff", "Student"].map((role) => { 

                // Define role-based images
   const roleImages = {
    Admin: "/img/admin.png",
    HOD: "/img/hod.png",
    Staff: "/img/teacher.jpg",
    Student: "/img/student-girl.jpg"
  };
                
                return(
                <button
                  key={role}
                  onClick={() => navigateToLogin(role)}
                  className="flex items-center space-x-3 w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  <img
                    src={roleImages[role]}
                    alt={role}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{role}</span>
                </button>
              );
                })}
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 text-blue-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
