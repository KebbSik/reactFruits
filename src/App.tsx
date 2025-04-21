import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Fruit } from "./constants/FruitsMap";
import Hero from "./components/Hero";
import FruitLine from "./components/FruitLine";

import { motion, useScroll } from "motion/react";
import ScrollSectionContainer from "./components/Tests/ScrollSectionContainer";
import OnScrollLine from "./components/OnScrollLine";
import FruitInfo from "./components/FruitInfo";

function App() {
  const scrollcontroller = {}; //percetage controler of scroll

  return (
    <>
      <Navbar />

      <ScrollSectionContainer height="600vh">
        <Hero scrollRange={[0, 0.55]} />
      </ScrollSectionContainer>

      <ScrollSectionContainer height={"400vh"}>
        <FruitLine scrollRange={[0.7, 0.85]} />
        <FruitInfo scrollRange={[0.85, 1]} />
      </ScrollSectionContainer>
    </>
  );
}

export default App;
