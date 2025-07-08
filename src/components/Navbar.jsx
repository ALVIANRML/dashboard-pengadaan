import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-white px-10 py-6 shadow-md fixed top-0 left-64 w-[calc(100%-16rem)] z-50">
      <div className="flex justify-between items-center w-full">
        {/* Date Range Picker */}
        <div className="flex items-center gap-4 text-black bg-[#F2F5EC] p-3 rounded border-2 text-base">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="outline-none"
          />
          <span className="text-gray-600">to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="outline-none"
          />
        </div>

        {/* Avatar Dropdown */}
        <div className="relative">
          <img
            src="/avatar.jpg"
            alt="Admin Avatar"
            className="w-11 h-11 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
