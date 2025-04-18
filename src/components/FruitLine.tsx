import { easeInOut } from "motion";
import { motion } from "motion/react";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const FruitLine = () => {
  const { theme } = useTheme();
  return (
    <div style={{ position: "absolute", height: "100vh", width: 300 }}>
      <svg height={"100%"} viewBox="0 0 380 1000" fill="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, ease: easeInOut }}
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
