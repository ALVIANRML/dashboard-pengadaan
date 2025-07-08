import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const name = localStorage.getItem("userName");

  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />
        <main className="pt-36 px-6">
          <h1 className="text-3xl font-bold text-center text-black">
            Halo, {name || "User"}! 👋
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;