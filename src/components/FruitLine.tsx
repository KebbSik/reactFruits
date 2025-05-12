import { easeInOut } from "motion";
import { motion, motionValue, useScroll, useTransform } from "motion/react";
import React, { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface Props {
  scrollRange?: [number, number];
}

const FruitLine = ({ scrollRange }: Props) => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const pathLenght = useTransform(
    scrollYProgress,
    scrollRange ? [scrollRange[0] * 1.06, scrollRange[1]] : [0, 0],
    [0, 1]
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "5%",
        height: "100vh",
      }}
    >
      <svg height={"100%"} viewBox="0 0 380 1000" fill="none">
        <motion.path
          pathLength={pathLenght}
          id="banana"
          d={theme.line}
          style={{
            stroke: "black",
            strokeWidth: "3",
          }}
        />
      </svg>
    </div>
  );
};

export default FruitLine;
