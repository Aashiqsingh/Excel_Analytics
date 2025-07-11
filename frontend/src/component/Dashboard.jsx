import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-lg mb-8">Please login or register to continue</p>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-xl shadow-lg hover:bg-blue-100 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-xl shadow-lg hover:bg-purple-100 transition">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
