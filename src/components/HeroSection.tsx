import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Find Your Perfect Ride
        </h1>
        <p className="text-lg md:text-xl">
          Explore cars that match your style and budget.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-indigo-500 font-medium rounded-lg shadow-lg hover:scale-105 transition transform">
          Start Searching
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
