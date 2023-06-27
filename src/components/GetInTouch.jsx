import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "./Typewriter";
import atom from "../assets/atom.gif";

const AnalyticalRDSolutions = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center text-3xl font-bold drop-shadow mb-8">
        <Typewriter />
      </div>
      <img src={atom} alt="Molecule" className="w-48 h-auto mb-12 mt-8" />
      <section
        className="bg-blue-600 py-8 w-full my-10 mx-4"
        style={{ marginTop: 120, marginBottom: 220 }}
      >
        <div className="container mx-auto flex flex-col items-center text-gray-200">
          <h2 className="text-3xl font-bold mb-6">
            Drive Growth and Innovation with Industry-Leading Analytical and R&D
            Solutions!
          </h2>
          <p className="text-lg mb-6">
            Dedicated to Supporting Your Business 24/7
          </p>
          <Link
            to="/contact"
            className="bg-blue-800 py-2 px-4 rounded-full hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AnalyticalRDSolutions;
