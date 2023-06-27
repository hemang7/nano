import React from "react";
import Stats from "./Stats";
import Banner from "./Banner";
import GetInTouch from "./GetInTouch";
import CarouselMain from "./CarouselMain";
import Typewriter from "./Typewriter";

function Home() {
  return (
    <div>
      <Banner />
      <Stats />

      <CarouselMain />
      <GetInTouch />
    </div>
  );
}

export default Home;
