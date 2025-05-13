import { motion, useScroll, useTransform } from "motion/react";
import { div } from "motion/react-client";
import React from "react";
import Row from "./Row";
import ScrollSectionContainer from "../Tests/ScrollSectionContainer";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  scrollRange?: [number, number];
}

const Description = ({ scrollRange }: Props) => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const minRange = scrollRange ? scrollRange[0] : 0;
  const maxRange = scrollRange ? scrollRange[1] : 0;
  const absoluteRange = scrollRange ? scrollRange[1] - scrollRange[0] : 0;

  const rowOneY = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, minRange + absoluteRange * 0.7],
    ["100vh", "0vh"]
  );
  const rowTwoY = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.7, minRange + absoluteRange * 0.9],
    ["100vh", "0vh"]
  );

  const bgColor = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, maxRange],
    ["#ffffff", theme.color.toString()]
  );

  return (
    <motion.div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100%",
        width: "100%",
        backgroundColor: bgColor,
      }}
    >
      <motion.div style={{ position: "absolute" }}>
        <Row />
      </motion.div>
      <motion.div style={{ position: "absolute", y: rowOneY }}>
        <Row isReversed />
      </motion.div>
      <motion.div style={{ position: "absolute", y: rowTwoY }}>
        <Row />
      </motion.div>
    </motion.div>
  );
};

export default Description;
