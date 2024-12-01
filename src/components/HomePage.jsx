import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Kundli Matching</h1>
      <button
        onClick={() => navigate("/match")}
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
      >
        Start Matching
      </button>
    </div>
  );
};

export default HomePage;
