import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import FruitInfo from "./FruitInfo";
import FruitLine from "./FruitLine";

interface Props {
  scrollRange?: [number, number];
}

const Info = ({ scrollRange }: Props) => {
  const { theme } = useTheme();
  const minRange = scrollRange ? scrollRange[0] : 0;
  const maxRange = scrollRange ? scrollRange[1] : 0;
  const absoluteRange = scrollRange ? scrollRange[1] - scrollRange[0] : 0;
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [minRange + absoluteRange * 0.8, maxRange],
    ["0", "-180%"]
  );

  return (
    <motion.div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        x,
        // x: "-50%",
      }}
    >
      <motion.svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 150 150"
        style={{
          // borderLeft: `${borderWidth}px solid black`,
          position: "absolute",
          x: "100%",
        }}
      >
        <motion.g id="Palm" fill="white" transform="translate(0,50) scale(0.5)">
          <g id="Vector 33">
            <path
              d="M 23 53 C 60 60 70 70 79 50"
              stroke="black"
              strokeWidth={15}
              strokeLinecap="round"
            />
            <path
              d="M26.3643 48.916C22.7358 43.416 32.0988 39.416 33.2358 44.416C33.4973 45.5658 33.6385 46.2133 33.701 46.5286C34.5334 49.7536 35.922 57.0807 32.8729 61.6544C28.8729 67.6544 25.2358 60.2866 25.2358 60.2866C21.3304 63.711 12.5632 70.2548 6.73679 65.9207C6.73679 65.9207 1.73591 63.9191 2.23635 55.4199C2.73679 46.9208 4.236 44.4209 3.73635 39.9199C3.2367 35.419 -3.26411 19.9241 5.73598 22.922C5.73598 22.922 6.23584 -5.58396 15.2358 2.4161C15.2358 2.4161 21.2358 -0.0839648 21.2358 6.41604C21.2358 6.41604 28.2367 6.06635 22.7367 16.9208C32.2365 13.5679 20.736 33.416 23.7358 42.916C26.7357 52.416 26.3643 48.916 26.3643 48.916Z"
              fill="white"
            />
            <path
              d="M22.7367 16.9208C13.2368 20.2736 17.2358 42.416 17.2358 42.416L17.0763 41.416C12.5763 19.416 22.7367 16.9208 22.7367 16.9208ZM22.7367 16.9208C32.2365 13.5679 20.736 33.416 23.7358 42.916C26.7357 52.416 26.3643 48.916 26.3643 48.916C22.7358 43.416 32.0988 39.416 33.2358 44.416C34.3729 49.416 33.2358 44.916 33.2358 44.916C33.2358 44.916 36.8729 55.6544 32.8729 61.6544C28.8729 67.6544 25.2358 60.2866 25.2358 60.2866L27.2358 58.416C27.2358 58.416 14.4257 71.6402 6.73679 65.9207C6.73679 65.9207 1.73591 63.9191 2.23635 55.4199C2.73679 46.9208 4.236 44.4209 3.73635 39.9199C3.2367 35.419 -3.26411 19.9241 5.73598 22.922C5.73598 22.922 6.23584 -5.58396 15.2358 2.4161C15.2358 2.4161 21.2358 -0.0839648 21.2358 6.41604C21.2358 6.41604 28.2367 6.06635 22.7367 16.9208Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M 2 -100 V 200" stroke="#000" strokeWidth={5}></path>
            {/* <path d="M 0 197.5 H 1000" stroke="#000" strokeWidth={5}></path> */}
          </g>
          <path
            id="Vector 34"
            d="M13.7351 34.916C13.7351 34.916 8.73509 10.916 20.2351 6.41602M10.2359 34.916C9.62821 19.0106 8.45542 9.04908 15.2359 2.41602"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector 35"
            d="M8.23569 36.416C5.79245 24.8889 5.43414 18.189 8.23569 5.41602"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector 37"
            d="M16.2356 59.416C7.73607 63.916 7.23354 55.416 12.7354 49.916"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector 38"
            d="M9.73584 44.7969C13.1973 44.0768 16.2284 45.1073 18.3591 48.0586"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </motion.g>
        <motion.image
          href={theme.svgUrl}
          width={100}
          height={100}
          x={21}
          y={20}
        />
        <motion.g id="Eyes" transform="translate(31,50) scale(0.5)">
          <path
            id="Ellipse 5"
            d="M17 1.5C21.0786 1.5 24.9176 3.83162 27.7969 7.89648C30.6736 11.9577 32.5 17.6465 32.5 24C32.5 30.3535 30.6736 36.0423 27.7969 40.1035C24.9176 44.1684 21.0786 46.5 17 46.5C12.9214 46.5 9.0824 44.1684 6.20312 40.1035C3.32643 36.0423 1.5 30.3535 1.5 24C1.5 17.6465 3.32643 11.9577 6.20312 7.89648C9.0824 3.83162 12.9214 1.5 17 1.5Z"
            fill="#FFFBFB"
            stroke="black"
            stroke-width="3"
          />
          <path
            id="Ellipse 6"
            d="M13 16.5C17.114 16.5 20.5 20.0527 20.5 24.5C20.5 28.9473 17.114 32.5 13 32.5C8.88599 32.5 5.5 28.9473 5.5 24.5C5.5 20.0527 8.88599 16.5 13 16.5Z"
            fill="black"
            stroke="black"
          />
          <circle id="Ellipse 7" cx="18" cy="19" r="4" fill="white" />
          <path
            id="Ellipse 8"
            d="M56 1.5C60.0786 1.5 63.9176 3.83162 66.7969 7.89648C69.6736 11.9577 71.5 17.6465 71.5 24C71.5 30.3535 69.6736 36.0423 66.7969 40.1035C63.9176 44.1684 60.0786 46.5 56 46.5C51.9214 46.5 48.0824 44.1684 45.2031 40.1035C42.3264 36.0423 40.5 30.3535 40.5 24C40.5 17.6465 42.3264 11.9577 45.2031 7.89648C48.0824 3.83162 51.9214 1.5 56 1.5Z"
            fill="#FFFBFB"
            stroke="black"
            stroke-width="3"
          />
          <path
            id="Ellipse 9"
            d="M52 16.5C56.114 16.5 59.5 20.0527 59.5 24.5C59.5 28.9473 56.114 32.5 52 32.5C47.886 32.5 44.5 28.9473 44.5 24.5C44.5 20.0527 47.886 16.5 52 16.5Z"
            fill="black"
            stroke="black"
          />
          <circle id="Ellipse 10" cx="57" cy="19" r="4" fill="white" />
        </motion.g>
      </motion.svg>

      <FruitLine scrollRange={[0.2, 0.28]} />
      <FruitInfo scrollRange={[0.28, 0.36]} />
    </motion.div>
  );
};

export default Info;
