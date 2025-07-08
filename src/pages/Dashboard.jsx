import React from "react";

const Dashboard = () => {
  const name = localStorage.getItem("userName");

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold">Halo, {name || "User"}! 👋</h1>
    </div>
  );
};

export default Dashboard;
