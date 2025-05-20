import { motion, useScroll, useTransform } from "motion/react";
import fork from "../../assets/Fork.svg";
import knife from "../../assets/Knife.svg";
import plate from "../../assets/Plate (1).svg";
import { useTheme } from "../../contexts/ThemeContext";
import useMaxScreenSize from "../../hooks/useMaxScreenSize";
import Row from "./Row";

interface Props {
  scrollRange?: [number, number];
}

const Description = ({ scrollRange }: Props) => {
  const { theme } = useTheme();
  const { max992, max768, max480 } = useMaxScreenSize();
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

  const rowOneRotate = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, minRange + absoluteRange * 0.7],
    [-30, 0]
  );

  const rowTwoRotate = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.7, minRange + absoluteRange * 0.9],
    [30, 0]
  );
  const plateRotation = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, minRange + absoluteRange * 0.9],
    [0, 720]
  );
  const bgColor = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, maxRange],
    ["#ffffff", theme.color.toString()]
  );
  const boxColor = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.5, maxRange],
    ["rgba(0,0,0,0.1)", "rgba(255,255,255,0.7)"]
  );
  const x = 0;

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
      {/* <motion.div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          background: "white",
          
        }}
      >
        asdfasdf
      </motion.div> */}
      <motion.div
        className="wrapper"
        style={{
          position: "relative",
          width: max992 ? "95%" : "80%",
          height: max480 ? "95% " : "80%",
          display: "flex",
          justifyContent: "center",
          // flexDirection: "column",
          gap: "1rem",
          padding: "2.5rem",
          background: boxColor,
          // border: "5px solid black",
          borderRadius: 50,
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flex: 1,
            position: "relative",
          }}
        >
          <motion.svg
            width={"100%"}
            height={"100%"}
            viewBox="-100 -100 200 200"
            // viewBox="-200 -200 1000 1000"
          >
            <motion.g style={{ rotate: plateRotation }}>
              <motion.image href={plate} x={-50} y={-50} height={100} />
            </motion.g>
            <image href={fork} x={-90} y={-50} height={100} />
            <image href={knife} x={70} y={-50} height={100} />
          </motion.svg>

          <motion.svg
            width={"100%"}
            height={"100%"}
            // viewBox="-100 -100 200 200"
            viewBox="-200 -200 900 1000"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <motion.path
              d={theme.icon}
              animate={{
                stroke: theme.color,
                fill: theme.color,
              }}
              transition={{ duration: 0.5 }}
              style={{
                rotate: plateRotation,
                scale: 0.5,
              }}
              strokeWidth={1}
            />
          </motion.svg>
        </div>

        <div
          style={{
            width: max768 ? "100%" : "50%",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div style={{ position: "absolute", x }}>
            <Row
              title="Appearance"
              content={theme.info.descriptions.appearance}
            />
          </motion.div>
          <motion.div
            style={{
              position: "absolute",
              x,
              y: rowOneY,
              rotate: rowOneRotate,
            }}
          >
            <Row
              title="History"
              content={theme.info.descriptions.history}
              isReversed
            />
          </motion.div>
          <motion.div
            style={{
              position: "absolute",
              x,
              y: rowTwoY,
              rotate: rowTwoRotate,
            }}
          >
            <Row
              title="Health Benefits"
              content={theme.info.descriptions.healthBenefits}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Description;
