import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold">Finsight</div>
          <div>
            <NavLink to="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Sign In
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Finsight</h1>
        <p className="text-lg text-gray-700">
          Finsight is your go-to platform for financial insights and analytics.
          Join us to stay updated with the latest trends and data in the
          financial world.
        </p>
      </div>
    </div>
  );
};

export default Home;
