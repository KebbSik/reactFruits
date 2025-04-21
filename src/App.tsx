import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Fruit } from "./constants/FruitsMap";
import Hero from "./components/Hero";
import FruitLine from "./components/FruitLine";

import { motion, useScroll } from "motion/react";
import ScrollSectionTest from "./components/Tests/ScrollSectionTest";

function App() {
  const scrollcontroller = {}; //percetage controler of scroll

  return (
    <>
      <Navbar />
      <div style={{ height: "600vh" }}>
        <Hero />
      </div>
      <ScrollSectionTest>
        <FruitLine scrollRange={[0.8, 1]} />
      </ScrollSectionTest>
    </>
  );
}

export default App;
