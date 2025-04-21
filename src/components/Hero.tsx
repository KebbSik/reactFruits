import { easeInOut } from "motion";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import OnScrollLine from "./OnScrollLine";

const Hero = () => {
  const { theme, currentFruit } = useTheme();
  // const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const svgBackground = useTransform(
    scrollYProgress,
    [0.1, 0.15],
    ["#ffffff0", theme.color]
  );
  const boxWidth = useTransform(scrollYProgress, [0.15, 0.2], ["50%", "100%"]);
  const svgCircleScale = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);
  const svgImgScale = useTransform(
    scrollYProgress,
    [0.25, 0.275, 0.3, 0.35],
    [1, 1.5, 0.5, 0]
  );
  const imageRotate = useTransform(scrollYProgress, [0.3, 0.35], [0, -360]);

  const boxRotate = useTransform(scrollYProgress, [0.35, 0.45], [0, 90]);
  const svgBoxHeight = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    ["100vh", "0vh"]
  );

  return (
    <>
      <motion.div
        style={{
          backgroundColor: svgBackground,
          position: "absolute",
          width: boxWidth,
          height: svgBoxHeight,
          zIndex: -1,
          rotate: boxRotate,
        }}
      >
        <motion.svg
          style={{ backgroundColor: svgBackground }}
          width="100%"
          height="100%"
          viewBox="-100 -100 200 200"
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
          width={400}
          key={theme.svgUrl}
          style={{
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
