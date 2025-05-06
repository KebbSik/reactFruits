import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Fruit } from "./constants/FruitsMap";
import Hero from "./components/Hero";
import FruitLine from "./components/FruitLine";

import { motion, useScroll } from "motion/react";
import ScrollSectionContainer from "./components/Tests/ScrollSectionContainer";
import OnScrollLine from "./components/OnScrollLine";
import FruitInfo from "./components/FruitInfo";
import ArrowSVG from "./components/DescriptionSecion/Description";
import Description from "./components/DescriptionSecion/Description";
import World from "./components/World/World";
import StartOver from "./components/StartOver";

function App() {
  const scrollcontroller = {}; //percetage controler of scroll

  return (
    <>
      <Navbar />

      <ScrollSectionContainer height="500vh">
        <Hero scrollRange={[0, 0.2]} />
      </ScrollSectionContainer>

      <ScrollSectionContainer height={"500vh"}>
        <FruitLine scrollRange={[0.2, 0.3]} />
        <FruitInfo scrollRange={[0.3, 0.4]} />
      </ScrollSectionContainer>

      <ScrollSectionContainer height="500vh">
        <Description />
      </ScrollSectionContainer>
      <ScrollSectionContainer height="500vh">
        <World scrollRange={[0.6, 0.8]} />
      </ScrollSectionContainer>
      <ScrollSectionContainer height="500vh">
        <StartOver />
      </ScrollSectionContainer>
    </>
  );
}

export default App;
