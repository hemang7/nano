import React from "react";
import hero from "../assets/hero1.mp4";

const Banner = () => {
  return (
    <section className="relative mt-10 sm:mt-10">
      <video className="w-full h-auto object-cover" autoPlay loop muted>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-end text-black text-center mx-10 md:mt-10">
        <div className="">
          <h1 className="text-5xl font-bold mb-5 text-center">
            NanoSolute <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl mb-10 text-center">
            Transforming Possibilities into Solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
