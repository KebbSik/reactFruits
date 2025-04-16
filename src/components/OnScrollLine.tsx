import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "motion/react";

const OnScrollLine = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ position: "absolute", width: 700, height: "100vh", zIndex: -1 }}
    >
      <svg
        // style={{ border: "1px solid black" }}
        width="100%"
        height="100%"
        viewBox="-100 -100 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          //   d="M 0 -200 V -70 A 70 70 0 1 1 -7.5 -69.5 A -25 -69.5 100 0 1 0 -70 M 0 70 V 200  "
          //   d="M 0 -200 V -70 A 70 70 0 1 1 -7.5 -69.5 A -25 -69.5 100 0 1 0 -70 M 0 70   " //V 200
          d="M 0 -200 V -70 A 70 70 0 1 1 -7.5 -69.6 A -25 -70 100 0 1 0 -70 A 70 70 0 1 1 0 70 V 200  " //V 200
          fill="none"
          strokeLinecap={"round"}
          strokeWidth={10}
          stroke={theme.color}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3 }}
        />
        <motion.path
          //   d="M 0 -200 V -70 A 70 70 0 1 1 -7.5 -69.5 A -25 -69.5 100 0 1 0 -70 M 0 70 V 200  "
          //   d="M 0 -70 A 70 70 0 1 1 0 70   " //V 200
          fill="none"
          strokeLinecap={"round"}
          strokeWidth={10}
          stroke={"#000"}
        />
      </svg>
    </div>
  );
};

export default OnScrollLine;
