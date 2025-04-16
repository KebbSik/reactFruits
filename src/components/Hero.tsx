import React from "react";
import BananaSVG from "./FruitsSVGs/BananaSVG";
import { FiX } from "react-icons/fi";
import WatermelonSVG from "./FruitsSVGs/WatermelonSVG";
import PeachSVG from "./FruitsSVGs/PeachSVG";
import StrawberrySVG from "./FruitsSVGs/StrawberrySVG";
import AppleSVG from "./FruitsSVGs/AppleSVG";
import { useTheme } from "../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";
import { MdOpacity } from "react-icons/md";
import { GiDuration } from "react-icons/gi";

const Hero = () => {
  const { theme, currentFruit } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          src={theme.svgUrl}
          alt={currentFruit}
          width={400}
          key={theme.svgUrl}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Hero;
