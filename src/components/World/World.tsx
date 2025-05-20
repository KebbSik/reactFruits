import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import WordSVG from "./WorldSVG";
import { CgEnter } from "react-icons/cg";
import { motion, useScroll, useTransform } from "motion/react";
import { div, path, text } from "motion/react-client";
import paths from "./WorldPaths";
import useMaxScreenSize from "../../hooks/useMaxScreenSize";
interface Props {
  scrollRange?: [number, number];
}

const World = ({ scrollRange }: Props) => {
  const { max1280, max992, max768, max480 } = useMaxScreenSize();
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
  const descriptionPathLength = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 1, minRange + absoluteRange * 1.3],
    [0, 1]
  );
  const descriptionOpacity = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 1.3, minRange + absoluteRange * 1.6],
    [0, 1]
  );
  const descriptionX = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 1.3, minRange + absoluteRange * 1.6],
    [-20, 0]
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <motion.div
        style={{
          position: "absolute",
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
        }}
      >
        <p>Map of distribution</p>
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
          d="M -70 510 C 155 940 250 900  480 970"
          fill="transparent"
        />
        <text fontSize={70} letterSpacing={2} fill={theme.color}>
          <textPath href="#description">Annual disctribution</textPath>
        </text>
      </svg>
    </div>
  );
};

export default World;
