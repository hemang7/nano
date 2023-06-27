import React from "react";
import { Link } from "react-router-dom";

const AnalyticalRDSolutions = () => {
  return (
    <section
      className="bg-pink-600 py-8 my-10 mx-4"
      style={{ marginBottom: 200, marginTop: -50 }}
    >
      <div className="container mx-auto flex flex-col items-center text-gray-200">
        <h2 className="text-3xl font-bold mb-6">
          Drive Growth and Innovation with Industry-Leading Analytical and R&D
          Solutions!
        </h2>
        <p className="text-lg  mb-6">
          Dedicated to Supporting Your Business 24/7
        </p>
        <Link
          to="/contact"
          className="bg-pink-700 py-2 px-4 rounded-full hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default AnalyticalRDSolutions;
