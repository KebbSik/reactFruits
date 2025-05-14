import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import WordSVG from "./WorldSVG";
import { CgEnter } from "react-icons/cg";
import { motion, useScroll, useTransform } from "motion/react";
import { div, path } from "motion/react-client";
import paths from "./WorldPaths";
interface Props {
  scrollRange?: [number, number];
}

const World = ({ scrollRange }: Props) => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const minRange = scrollRange ? scrollRange[0] : 0;
  const maxRange = scrollRange ? scrollRange[1] : 0;
  const absoluteRange = scrollRange ? scrollRange[1] - scrollRange[0] : 0;

  const titleOpacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.75, minRange + absoluteRange * 0.8],
    [1, 0]
  );

  const titleScale = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.75, minRange + absoluteRange * 0.8],
    [1, 6]
  );
  const pathLength = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.8, minRange + absoluteRange * 1],
    [0, 1]
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          background: theme.color,
          height: "100vh",
          fontSize: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.textColor,
          opacity: titleOpacity,
          scale: titleScale,
        }}
      >
        <p>Map of apperance</p>
      </motion.div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100vh"
        viewBox="0 0 1920 1032"
        style={{
          border: "1px solid black",
        }}
      >
        <circle
          r={20}
          cx={960}
          cy={50}
          stroke={theme.color}
          fill={theme.color}
        ></circle>
        {paths[theme.name].map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={theme.color}
            strokeWidth={20}
            strokeLinecap="round"
            fill={"none"}
            pathLength={pathLength}
          />
        ))}

        <WordSVG />
      </svg>
    </div>
  );
};

export default World;
