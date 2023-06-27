import React from "react";
import beaker from "../assets/beaker.gif";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={beaker} alt="Molecule" className="w-32 h-auto" />
    </div>
  );
}

export default Loading;
