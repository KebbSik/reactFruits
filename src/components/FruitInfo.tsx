import { motion, useScroll, useTransform } from "motion/react";
import { div } from "motion/react-client";
import React from "react";
import useMaxScreenSize from "../hooks/useMaxScreenSize";

interface Props {
  scrollRange?: [number, number];
}

const FruitInfo = ({ scrollRange }: Props) => {
  const { max480, max768, max992, max1280, max1400 } = useMaxScreenSize();

  const minRange = scrollRange ? scrollRange[0] : 0;
  const maxRange = scrollRange ? scrollRange[1] : 0;
  const absoluteRange = scrollRange ? scrollRange[1] - scrollRange[0] : 0;
  const { scrollYProgress } = useScroll();
  const info1 = useTransform(
    scrollYProgress,
    [minRange, minRange + absoluteRange * 0.25],
    [-100, 0]
  );
  const info2 = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.25, minRange + absoluteRange * 0.5],
    [-100, 0]
  );
  const info3 = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, minRange + absoluteRange * 0.75],
    [-100, 0]
  );
  const info4 = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.75, maxRange],
    [-100, 0]
  );
  const info1Opacity = useTransform(
    scrollYProgress,
    [minRange, minRange + absoluteRange * 0.25],
    [0, 1]
  );
  const info2Opacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.25, minRange + absoluteRange * 0.5],
    [0, 1]
  );
  const info3Opacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, minRange + absoluteRange * 0.75],
    [0, 1]
  );
  const info4Opacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.75, maxRange],
    [0, 1]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        padding: max992 ? "0.5rem" : "5rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "end",

          fontSize: max992 ? "0.8rem" : "1rem",
          //   listStyle: "none",
        }}
      >
        <motion.li style={{ x: info1, opacity: info1Opacity }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing emotion.lit.
          Fugiat, cupiditate.
        </motion.li>
        <motion.li style={{ x: info2, opacity: info2Opacity }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing emotion.lit.
          Fugiat, cupiditate.
        </motion.li>
        <motion.li style={{ x: info3, opacity: info3Opacity }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing emotion.lit.
          Fugiat, cupiditate.
        </motion.li>
        <motion.li style={{ x: info4, opacity: info4Opacity }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing emotion.lit.
          Fugiat, cupiditate.
        </motion.li>
      </ul>
    </div>
  );
};

export default FruitInfo;
