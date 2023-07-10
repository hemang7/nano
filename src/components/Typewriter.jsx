import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "NanoSolute aims to realize the potential of nanotechnology-based innovation for a sustainable future.",
      ],
      typeSpeed: 40,
      

    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeRef} className="text-center"></span>;
};

export default Typewriter;
