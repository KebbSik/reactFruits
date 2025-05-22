import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";
import useMaxScreenSize from "../../hooks/useMaxScreenSize";
import paths from "./WorldPaths";
import WordSVG from "./WorldSVG";

interface Props {
  scrollRange?: [number, number];
}

const World = ({ scrollRange }: Props) => {
  const { max1280, max768, max992, max480, max360 } = useMaxScreenSize();
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const minRange = scrollRange ? scrollRange[0] : 0;
  // const maxRange = scrollRange ? scrollRange[1] : 0;
  const absoluteRange = scrollRange ? scrollRange[1] - scrollRange[0] : 0;

  const titleOpacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.75, minRange + absoluteRange],
    [1, 0]
  );

  const titleScale = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.75, minRange + absoluteRange],
    [1, 6]
  );
  const pathLength = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 1.05, minRange + absoluteRange * 1.25],
    [0, 1]
  );
  const descriptionPathLength = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 1.25, minRange + absoluteRange * 1.45],
    [0, 1]
  );
  const descriptionOpacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 1.45, minRange + absoluteRange * 1.75],
    [0, 1]
  );
  const descriptionX = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 1.45, minRange + absoluteRange * 1.75],
    [-20, 0]
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <motion.div
        style={{
          position: "absolute",
          // top: 0,
          width: "100%",
          background: theme.color,
          height: "100vh",
          fontSize: max1280
            ? max768
              ? max480
                ? "2.7rem"
                : "4.5rem"
              : "8rem"
            : "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: theme.textColor,
          opacity: titleOpacity,
          scale: titleScale,
          zIndex: 20,
        }}
      >
        <span style={{ textWrap: "wrap" }}>Map of distribution</span>
      </motion.div>
      <svg
        width="100%"
        height="100vh"
        viewBox="0 0 1920 1032"
        style={{
          border: "1px solid black",
        }}
      >
        <WordSVG />
        {paths[theme.name].map((path, index) => (
          <g key={index}>
            <motion.path
              // id={path.country}
              d={path.path}
              stroke={theme.color}
              strokeWidth={10}
              strokeLinecap="round"
              fill="none"
              pathLength={pathLength}
            />
          </g>
        ))}
        {paths[theme.name].map((path, index) => (
          <g key={index}>
            <motion.path
              // id={path.country}
              d={path.path}
              stroke={theme.color}
              strokeWidth={10}
              strokeLinecap="round"
              fill="none"
              pathLength={pathLength}
            />
          </g>
        ))}
        {paths[theme.name].map((path, index) => (
          <g key={index}>
            <motion.path
              id={path.country}
              d={path.detailsPath}
              stroke={"#000"}
              strokeWidth={2}
              strokeLinecap="round"
              fill="none"
              pathLength={descriptionPathLength}
              // opacity={descriptionOpacity}
            />
            <motion.g opacity={descriptionOpacity} style={{ x: descriptionX }}>
              <text
                fontSize={15}
                fill="none"
                stroke="white"
                strokeWidth={5}
                style={{ baselineShift: "5px" }}
              >
                <textPath
                  href={`#${path.country}`}
                  startOffset="50%"
                  textAnchor="middle"
                  dy={5}
                >
                  {path.country} - {path.amout} million tons
                </textPath>
              </text>
              <text fontSize={15} fill="black" style={{ baselineShift: "5px" }}>
                <textPath
                  href={`#${path.country}`}
                  startOffset="50%"
                  textAnchor="middle"
                  dy={5}
                >
                  {path.country} - {path.amout} million tons
                </textPath>
              </text>
            </motion.g>
          </g>
        ))}

        <circle
          r={35}
          cx={960}
          cy={50}
          stroke={theme.color}
          strokeWidth={5}
          fill={"#fff"}
        ></circle>
        <image x={935} y={25} href={theme.svgUrl} width={50}></image>
        <path
          id="description"
          // d="M 100 510 C 155 940 250 900  480 970"
          d="M 750 800 C 1000 1050 1250 900  1400 850"
          fill="transparent"
        />
        <text fontSize={65} letterSpacing={2} fill={theme.color}>
          <textPath href="#description">Annual disctribution</textPath>
        </text>
      </svg>
      {max992 && (
        <div
          style={{
            position: "absolute",
            zIndex: 16,
            width: "100vw",
            minHeight: "20vh",
            background: theme.transparentColor,
            bottom: 0,
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: "space-around",
            fontSize: max480 ? (max360 ? "0.6rem" : "0.8rem") : "",
            maxHeight: max480 ? "30%" : "40%",
            flexDirection: "column",
          }}
        >
          {paths[theme.name].map((path, index) => (
            <div
              key={index}
              style={{
                padding: "0.3rem",
                margin: "0.3rem",
                border: `3px solid ${theme.color}`,
                borderRadius: 10,
                // textDecoration: "underline",
                background: "#fff",
                // flexShrink: 1,
                // flexGrow: 1,
                // textDecorationColor: theme.color,
              }}
            >
              {/* {index + 1}. */}
              {path.country} -{" "}
              <span style={{ color: theme.color }}>{path.amout}</span> million
              tons
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default World;
