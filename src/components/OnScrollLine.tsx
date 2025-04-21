import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, useScroll, useTransform } from "motion/react";

const OnScrollLine = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const boxWidth = useTransform(scrollYProgress, [0.1, 0.2], ["50%", "100%"]);
  const boxRotate = useTransform(scrollYProgress, [0.2, 0.3], [0, 90]);
  const scrollTheme = useTransform(
    scrollYProgress,
    [0.4, 0.8],
    ["#ffffff0", theme.color]
  );

  return (
    <motion.div
      style={{
        backgroundColor: scrollTheme,
        position: "absolute",
        width: boxWidth,
        height: "100vh",
        zIndex: -1,
        rotate: boxRotate,
      }}
    >
      <svg
        style={{ border: "1px solid black" }}
        width="100%"
        height="100%"
        viewBox="-100 -100 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 0 -200 V -70 A 70 70 0 1 1 -7.5 -69.6 A -25 -70 100 0 1 0 -70 A 70 70 0 1 1 0 70 V 200  "
          fill="none"
          strokeLinecap={"round"}
          strokeWidth={10}
          stroke={theme.color}
          pathLength={pathLength}
        />
        <motion.path
          fill="none"
          strokeLinecap={"round"}
          strokeWidth={10}
          stroke={"#000"}
        />
      </svg>
    </motion.div>
  );
};

export default OnScrollLine;
