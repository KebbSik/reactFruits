import { easeInOut } from "motion";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import useMaxScreenSize from "../hooks/useMaxScreenSize";
// import OnScrollLine from "./OnScrollLine";

interface Props {
  scrollRange?: [number, number];
}

const Hero = ({ scrollRange }: Props) => {
  const { theme, currentFruit } = useTheme();
  const { max768 } = useMaxScreenSize();
  const minRange = scrollRange ? scrollRange[0] : 0;
  const maxRange = scrollRange ? scrollRange[1] : 0;
  const absoluteRange = scrollRange ? scrollRange[1] - scrollRange[0] : 0;

  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(
    scrollYProgress,
    [minRange, minRange + absoluteRange * 0.2],
    [0, 1]
  );
  const svgBackground = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.2, minRange + absoluteRange * 0.3],
    ["#ffffff0", theme.color]
  );

  const svgCircleScale = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.55, minRange + absoluteRange * 0.6],
    [1, 0]
  );
  const svgImgScale = useTransform(
    scrollYProgress,
    [
      minRange + absoluteRange * 0.45,
      minRange + absoluteRange * 0.5,
      minRange + absoluteRange * 0.55,
      minRange + absoluteRange * 0.6,
    ],
    [1, 1.5, 0.5, 0]
  );
  const imageRotate = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.55, minRange + absoluteRange * 0.7],
    [0, -360]
  );

  const boxRotate = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.7, minRange + absoluteRange * 0.85],
    [0, 90]
  );
  // const svgBoxHeight = useTransform(
  //   scrollYProgress,
  //   [minRange + absoluteRange * 0.85, maxRange],
  //   ["100vh", "0vh"]
  // );
  // const boxWidth = useTransform(
  //   scrollYProgress,
  //   [minRange + absoluteRange * 0.3, minRange + absoluteRange * 0.4],
  //   ["50%", "100%"]
  // );
  const svgScale = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.85, maxRange + absoluteRange * 0.15],
    [1, 0]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.85, maxRange],
    [0, 700]
  );

  return (
    <>
      <motion.div
        style={{
          backgroundColor: svgBackground,
          position: "absolute",
          width: "100vw",
          // height: boxWidth,
          zIndex: -1,
          rotate: boxRotate,
          // border: "1px solid black",
          borderRadius: borderRadius,
          scale: svgScale,
        }}
      >
        <motion.svg
          style={{ backgroundColor: svgBackground, borderRadius: borderRadius }}
          width="100vw"
          height="100vh"
          viewBox="-100 -100 200 200"
        >
          <motion.path
            d="M 0 -300 V -70 A 70 70 0 1 1 -7.5 -69.6 A -25 -70 100 0 1 0 -70 A 70 70 0 1 1 0 70 V 300  "
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
          <motion.circle
            x={0}
            y={0}
            r={65}
            fill={"#FFF"}
            style={{ scale: svgCircleScale }}
          />
        </motion.svg>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.img
          src={theme.svgUrl}
          alt={currentFruit}
          key={theme.svgUrl}
          style={{
            width: max768 ? "min(40%,350px)" : "min(20%,350px)",
            zIndex: -1,
            scale: svgImgScale,
            rotate: imageRotate,
            // top: "5vh",
            // position: "absolute",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.1, 1] }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: easeInOut }}
        />
      </AnimatePresence>
    </>
  );
};

export default Hero;
