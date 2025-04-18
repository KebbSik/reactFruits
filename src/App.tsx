import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Fruit } from "./constants/FruitsMap";
import Hero from "./components/Hero";
import FruitLine from "./components/FruitLine";
import BananaSVG from "./components/FruitsSVGs/BananaSVG";
import { motion, useScroll } from "motion/react";

function App() {
  const [fruit] = useState<Fruit>("banana");
  const { scrollYProgress, scrollY } = useScroll();
  useEffect(() => {
    const unsubY = scrollY.on("change", (latest) => {
      console.log("scrollY:", latest);
    });
    const unsubYProgress = scrollYProgress.on("change", (latest) => {
      console.log("scrollY:", latest);
    });
  }, [scrollY, scrollYProgress]);
  return (
    <>
      <Navbar />

      <Hero />

      <FruitLine />
    </>
  );
}

export default App;
