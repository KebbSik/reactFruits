import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Fruit } from "./constants/FruitsMap";
import Hero from "./components/Hero";
import FruitLine from "./components/FruitLine";

import { motion, useScroll } from "motion/react";
import ScrollSectionContainer from "./components/Tests/ScrollSectionContainer";
import OnScrollLine from "./components/OnScrollLine";

function App() {
  const scrollcontroller = {}; //percetage controler of scroll

  return (
    <>
      <Navbar />

      <ScrollSectionContainer height="600vh">
        <Hero />
      </ScrollSectionContainer>

      <ScrollSectionContainer height={"400vh"}>
        <FruitLine scrollRange={[0.8, 1]} />
      </ScrollSectionContainer>
    </>
  );
}

export default App;
