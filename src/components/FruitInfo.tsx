import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import useMaxScreenSize from "../hooks/useMaxScreenSize";

interface Props {
  scrollRange?: [number, number];
}

const FruitInfo = ({ scrollRange }: Props) => {
  const { max480, max768, max992, max1280 } = useMaxScreenSize();
  const { theme } = useTheme();
  const minRange = scrollRange ? scrollRange[0] : 0;
  const maxRange = scrollRange ? scrollRange[1] : 0;
  const absoluteRange = scrollRange ? scrollRange[1] - scrollRange[0] : 0;
  const { scrollYProgress } = useScroll();

  const pathOpacity = useTransform(
    scrollYProgress,
    [minRange, minRange + absoluteRange * 0.05],
    [0, 1]
  );
  const pathLength = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.05, minRange + absoluteRange * 0.2],
    [0, 1]
  );
  const info1 = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.2, minRange + absoluteRange * 0.4],
    [-100, 0]
  );
  const info2 = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.4, minRange + absoluteRange * 0.6],
    [-100, 0]
  );
  const info3 = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.6, minRange + absoluteRange * 0.8],
    [-100, 0]
  );
  const info4 = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.8, maxRange],
    [-100, 0]
  );
  const info1Opacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.2, minRange + absoluteRange * 0.4],
    [0, 1]
  );
  const info2Opacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.4, minRange + absoluteRange * 0.6],
    [0, 1]
  );
  const info3Opacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.6, minRange + absoluteRange * 0.8],
    [0, 1]
  );
  const info4Opacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.8, maxRange],
    [0, 1]
  );

  const infoX = [info1, info2, info3, info4];
  const infoOpacity = [info1Opacity, info2Opacity, info3Opacity, info4Opacity];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: max992 ? "center" : "flex-end",
        width: "100%",
        height: "100%",
        padding: max992 ? "0.5rem" : "5rem",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          fontSize: max1280
            ? max992
              ? max768
                ? max480
                  ? "1rem"
                  : "1.2rem"
                : "1.2rem"
              : "1rem"
            : "1.15rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <svg height={"100%"} width={"100%"} viewBox="0 0 1000 1000">
            <motion.path
              // d={"M 0 0 V 100"}
              d="M104 87C206.244 142 421.234 65.5485 305.087 167.059C209.067 250.978 29.7502 398.73 206.244 324.631C382.738 250.532 779.164 66.177 526.768 280.439C287.176 487.113 -91.4178 797.794 272.087 575.943C635.591 354.093 988.579 102.781 683.144 388.464C377.709 674.147 -56.2105 1080.8 380.452 777.707C817.115 474.615 1003.67 454.975 774.134 649.596C544.601 844.218 441 964.5 620 892.5C810.906 815.711 896 862.5 896 862.5"
              stroke={theme.color}
              fill={"none"}
              strokeWidth={155}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              pathLength={pathLength}
              style={{ opacity: pathOpacity }}
            ></motion.path>
          </svg>
        </div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          {theme.info.facts.map((fact, index) => (
            <motion.div
              key={index}
              style={{
                x: infoX[index],
                opacity: infoOpacity[index],
                background: "#fff",
                padding: "1rem",
                borderRadius: "50px",
                border: `5px solid ${theme.transparentColor}`,
                textAlign: "center",
              }}
            >
              {fact}
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FruitInfo;
