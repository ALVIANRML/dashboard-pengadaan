import React, { useState } from "react";

const Navbar = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <nav className="bg-white px-10 py-8 shadow-md fixed top-0 left-64 w-[calc(100%-16rem)] z-50">
      <div className="flex justify-between items-center w-full">
        {/* Date Range Picker */}
        <div className="flex items-center gap-4 text-black bg-[#F2F5EC] p-3 rounded border-2 text-xl">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="outline-none"
          />
          <span className="text-gray-600 text-xl">to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="outline-none"
          />
        </div>

        {/* Login Button */}
        <button className="bg-[#4D5240] text-white text-xl px-6 py-2 rounded-md hover:bg-[#9AA580] transition duration-300 ease-in-out hover:scale-105">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;