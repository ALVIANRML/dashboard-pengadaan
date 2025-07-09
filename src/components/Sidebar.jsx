import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Image,
  Clock,
  Upload,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Sidebar = () => {
  const [isHoveringUpload, setIsHoveringUpload] = useState(false);
  const timeoutRef = useRef(null);

  const handleUploadClick = (type) => {
    alert(`Upload ${type} dipilih`);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHoveringUpload(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHoveringUpload(false);
    }, 300);
  };

  return (
    <aside className="bg-[#4D5240] text-white w-64 min-w-[16rem] h-screen p-4 fixed top-0 left-0 z-50">
      <div className="mb-8 text-center">
        <img src="/logo.png" alt="Company Logo" className="w-24 mx-auto" />
      </div>

      {/* Menu List */}
      <ul className="space-y-2 text-base">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 hover:bg-[#F2F5EC] hover:text-black p-2 rounded"
          >
            <Home size={20} /> Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/rupa"
            className="flex items-center gap-2 hover:bg-[#F2F5EC] hover:text-black p-2 rounded"
          >
            <Image size={20} /> Rupa
          </Link>
        </li>

        <li>
          <Link
            to="/sla"
            className="flex items-center gap-2 hover:bg-[#F2F5EC] hover:text-black p-2 rounded"
          >
            <Image size={20} /> SLA
          </Link>
        </li>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className="flex items-center justify-between hover:bg-[#F2F5EC] hover:text-black p-2 rounded cursor-pointer">
            <div className="flex items-center gap-2">
              <Upload size={20} /> Upload
            </div>
            {isHoveringUpload ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </li>

          {isHoveringUpload && (
            <ul className="absolute left-0 top-full mt-1 bg-white text-black shadow-md rounded-md p-2 w-40 border border-gray-300 z-20 transition-opacity duration-300 ease-in-out">
              <li
                onClick={() => handleUploadClick("Real")}
                className="p-2 rounded cursor-pointer hover:bg-[#F2F5EC] hover:text-black"
              >
                Upload Real
              </li>
              <li
                onClick={() => handleUploadClick("Rupa")}
                className="p-2 rounded cursor-pointer hover:bg-[#F2F5EC] hover:text-black"
              >
                Upload Rupa
              </li>
            </ul>
          )}
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
