import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import useMaxScreenSize from "../hooks/useMaxScreenSize";

interface Props {
  scrollRange?: [number, number];
}

const FruitLine = ({ scrollRange }: Props) => {
  const { max992 } = useMaxScreenSize();
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const pathLenght = useTransform(
    scrollYProgress,
    scrollRange ? [scrollRange[0] * 1.27, scrollRange[1]] : [0, 0],
    [0, 1]
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: max992 ? "50%" : "5%",
        transform: max992 ? "translateX(-50%)" : "",
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
            strokeWidth: "6",
          }}
        />
      </svg>
    </div>
  );
};

export default FruitLine;
