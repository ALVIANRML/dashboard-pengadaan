import React, { useState } from "react";
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
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <aside className="bg-[#4D5240] text-white w-64 min-w-[16rem] h-screen p-4 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="mb-8 text-center">
        <img src="/logo.png" alt="Company Logo" className="w-24 mx-auto" />
      </div>

      {/* Menu List */}
      <ul className="space-y-2 text-base">
        <ul className="space-y-2">
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
        </ul>
        <li className="flex items-center gap-2 hover:bg-[#F2F5EC] hover:text-black p-2 rounded cursor-pointer">
          <Clock size={20} /> SLA
        </li>

        {/* Upload with dropdown toggle */}
        <li
          className="flex items-center justify-between hover:bg-[#F2F5EC] hover:text-black p-2 rounded cursor-pointer"
          onClick={() => setIsUploadOpen(!isUploadOpen)}
        >
          <div className="flex items-center gap-2">
            <Upload size={20} /> Upload
          </div>
          {isUploadOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </li>

        {/* Dropdown content */}
        {isUploadOpen && (
          <ul className="ml-8 mt-1 space-y-1 text-sm rounded-md p-2">
            <li className="p-2 rounded cursor-pointer hover:bg-[#F2F5EC] hover:text-black border border-gray-400">
              Real
            </li>
            <li className="p-2 rounded cursor-pointer hover:bg-[#F2F5EC] hover:text-black border border-gray-400">
              Rupa
            </li>
          </ul>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
