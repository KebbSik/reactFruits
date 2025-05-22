import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

import { MdOutlineReplay } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import useMaxScreenSize from "../hooks/useMaxScreenSize";

const StartOver = () => {
  const { theme } = useTheme();
  const [isScrolling, setIsScrolling] = useState(false);
  const { max1280, max992, max768, max480 } = useMaxScreenSize();

  const scroller = () => {
    setIsScrolling(true);

    scroll.scrollToTop({
      duration: 1500,
      smooth: "easeInOutQuad",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 2000);
  };

  return (
    <>
      {/* dark onScroll background */}
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 1)",
              zIndex: 9999,
              pointerEvents: "none",
              color: theme.transparentColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: max1280
                ? max768
                  ? max480
                    ? "2.7rem"
                    : "5rem"
                  : "8rem"
                : "12rem",
            }}
          >
            <motion.div
            // initial={{ y: 200 }}
            // animate={{ y: 0 }}
            // exit={{ y: 200 }}
            // transition={{ duration: 1 }}
            >
              Loading . . .
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.transparentColor,

          // zIndex: isScrolling ? 1 : -1,
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1000 1000"
          width={"100vw"}
          height={"100vh"}
          style={{ background: "#fff" }}
        >
          <motion.image
            initial={{ rotate: 0, x: 0 }}
            animate={{
              rotate: [30, -30],
              x: [300, 100],
            }}
            transition={{
              rotate: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4,
                ease: "linear",
              },
              x: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4,
                ease: "linear",
              },
            }}
            href={theme.svgUrl}
            x={550}
            y={300}
            height={350}
            style={{
              transformOrigin: "175px 175px",
            }}
          />
          <path
            d="M-650 280 L 1670 980 L 2800 2500 L -600 2800 "
            fill={theme.transparentColor}
            strokeWidth={1}
            // stroke="red"
            style={{
              transition: "all 1s ease",
            }}
          />
          <motion.g
            id="Eyes"
            // transform="translate(710,470)"
            initial={{ rotate: 0, x: 910, y: 470 }}
            animate={{
              rotate: [30, -30],
              x: [910, 700],
              y: [470, 420, 470],
            }}
            transition={{
              rotate: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4,
                ease: "linear",
              },
              x: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4,
                ease: "linear",
              },
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4,
                ease: "linear",
              },
            }}
          >
            <path
              id="Ellipse 5"
              d="M17 1.5C21.0786 1.5 24.9176 3.83162 27.7969 7.89648C30.6736 11.9577 32.5 17.6465 32.5 24C32.5 30.3535 30.6736 36.0423 27.7969 40.1035C24.9176 44.1684 21.0786 46.5 17 46.5C12.9214 46.5 9.0824 44.1684 6.20312 40.1035C3.32643 36.0423 1.5 30.3535 1.5 24C1.5 17.6465 3.32643 11.9577 6.20312 7.89648C9.0824 3.83162 12.9214 1.5 17 1.5Z"
              fill="#FFFBFB"
              stroke="black"
              strokeWidth="3"
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
              strokeWidth="3"
            />
            <path
              id="Ellipse 9"
              d="M52 16.5C56.114 16.5 59.5 20.0527 59.5 24.5C59.5 28.9473 56.114 32.5 52 32.5C47.886 32.5 44.5 28.9473 44.5 24.5C44.5 20.0527 47.886 16.5 52 16.5Z"
              fill="black"
              stroke="black"
            />
            <circle id="Ellipse 10" cx="57" cy="19" r="4" fill="white" />
          </motion.g>
          <path
            id="palm_L"
            transform="translate(810,400)"
            d="M12.3893 26.9061C11.2578 29.8716 5.90901 38.1748 7.45195 45.0546C8.99488 51.9344 11.052 47.9831 13.9322 50.9485C16.8123 53.9138 19.1781 54.7928 16.298 54.7928C13.418 54.7928 13.9322 55.1856 12.3893 53.8809C10.8463 52.5761 8.6867 52.2436 3.85946 53.1083C-0.967783 53.973 4.871 65.2458 9.4998 67.381C14.1286 69.5161 17.5915 65.6122 22.1199 63.4797C26.6483 61.3471 24.8017 59.3703 31.282 56.049C37.7624 52.7277 38.3106 53.1205 42.6308 43.8684C46.9511 34.6162 47.5682 14.9257 41.8079 8.16452C36.0477 1.40332 23.3956 0.0985413 19.0754 4.25016C14.7552 8.40177 13.5207 23.9407 12.3893 26.9061Z"
            stroke="black"
            fill="white"
            strokeWidth="3"
          />
          <path
            id="palm_R"
            transform="translate(810,520)"
            d="M12.3893 42.9747C11.2578 40.0093 5.90901 31.7061 7.45195 24.8262C8.99488 17.9464 11.052 21.8978 13.9322 18.9324C16.8123 15.967 19.1781 15.088 16.298 15.088C13.418 15.088 13.9322 14.6953 12.3893 16C10.8463 17.3047 8.6867 17.6373 3.85946 16.7726C-0.967783 15.9078 4.871 4.63502 9.4998 2.49991C14.1286 0.364791 17.5915 4.26864 22.1199 6.40119C26.6483 8.53373 24.8017 10.5105 31.282 13.8318C37.7624 17.1531 38.3106 16.7603 42.6308 26.0125C46.9511 35.2647 47.5682 54.9551 41.8079 61.7163C36.0477 68.4775 23.3956 69.7823 19.0754 65.6307C14.7552 61.4791 13.5207 45.9402 12.3893 42.9747Z"
            fill="white"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M-650 280 L550 650 V250 L 825 325 V 730 L 1650 990 V -1200 H -550"
            stroke="black"
            fill={theme.color}
            strokeWidth={"0.5rem"}
            style={{
              transition: "all 1s ease",
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M550 250L300 300V700L550 650V250Z"
            fill="#CD9A65"
            stroke="black"
            strokeWidth={"0.5rem"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M407 331L347 346.205V481L407 465.32V331Z" fill="#CD9A65" />
          <path
            d="M407 494.453L347 509.658V637L407 621.32V494.453Z"
            fill="#CD9A65"
          />

          <g strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M407 331L347 346.205V481L407 465.32V331Z"
              stroke="black"
              fill="#996244"
              strokeWidth={"0.5rem"}
            />
            <path
              d="M407 494.453L347 509.658V637L407 621.32V494.453Z"
              stroke="black"
              fill="#996244"
              strokeWidth={"0.5rem"}
            />
            <path
              d="M506 308L446 323.205V456.5L506 440.82V308Z"
              fill="#CD9A65"
            />
            <path
              d="M506 471.453L446 486.658V614L506 601V471.453Z"
              fill="#CD9A65"
            />
            <path
              d="M506 308L446 323.205V456.5L506 440.82V308Z"
              stroke="black"
              fill="#996244"
              strokeWidth={"0.5rem"}
            />
            <path
              d="M506 471.453L446 486.658V614L506 601V471.453Z"
              stroke="black"
              fill="#996244"
              strokeWidth={"0.5rem"}
            />
            <path
              d="M324.24 494.756C327.629 494.292 330.782 494.81 333.13 495.971C335.484 497.135 336.933 498.882 337.205 500.866C337.476 502.849 336.551 504.923 334.596 506.677C332.646 508.426 329.749 509.771 326.359 510.235C322.969 510.699 319.817 510.182 317.468 509.022C315.114 507.858 313.665 506.109 313.394 504.126C313.122 502.142 314.048 500.069 316.003 498.316C317.953 496.567 320.85 495.221 324.24 494.756Z"
              fill="#FFD943"
              stroke="black"
              strokeWidth={"0.3rem"}
            />
          </g>

          <g id="fingers_L" transform="translate(805,400)">
            <path
              d="M20.4425 3.10042C19.0664 2.71227 17.0439 2.11179 14.9642 2.23254C12.8845 2.3533 11.5373 3.04627 10.8124 4.90693C10.0875 6.76759 10.3222 7.55911 12.0088 9.15284C13.6954 10.7466 14.2061 10.8696 17.3958 11.7514C20.5856 12.6331 27.3982 12.4657 28.1172 9.81209C28.8363 7.15852 26.6549 6.18055 25.7336 5.39317C24.8123 4.60579 21.8185 3.48857 20.4425 3.10042Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M17.7625 11.8449C16.003 11.521 13.4142 11.0051 10.8149 11.456C8.21546 11.907 6.58348 13.0165 5.83122 15.5916C5.07897 18.1667 5.44042 19.1863 7.69158 21.0698C9.94274 22.9533 10.5939 23.0456 14.6711 23.7725C18.7482 24.4994 27.2827 23.3255 27.9605 19.6969C28.6384 16.0684 25.8185 15.0727 24.5958 14.1545C23.3732 13.2362 19.522 12.1689 17.7625 11.8449Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M16.3907 23.7338C14.1809 23.6494 10.9243 23.4806 7.78403 24.4091C4.64379 25.3377 2.78287 26.857 2.20134 29.8958C1.61981 32.9346 2.20134 34.0319 5.2253 35.8045C8.24926 37.5771 9.0634 37.5771 14.1809 37.7459C19.2983 37.9148 29.6496 35.2136 29.9985 30.9931C30.3474 26.7726 26.7419 26.0973 25.1136 25.2532C23.4853 24.4091 18.6005 23.8183 16.3907 23.7338Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M15.2713 37.813C13.4903 37.74 10.8656 37.5941 8.33461 38.3967C5.80367 39.1994 4.30382 40.5127 3.83513 43.1395C3.36643 45.7662 3.83513 46.7147 6.27235 48.247C8.70957 49.7793 9.36574 49.7792 13.4903 49.9252C17.6148 50.0711 25.9576 47.7362 26.2388 44.088C26.52 40.4398 23.6141 39.856 22.3018 39.1264C20.9894 38.3967 17.0524 37.886 15.2713 37.813Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <g id="fingers_R" transform="translate(805,535)">
            <path
              d="M20.4425 48.7804C19.0664 49.1686 17.0439 49.7691 14.9642 49.6483C12.8845 49.5276 11.5373 48.8346 10.8124 46.9739C10.0875 45.1133 10.3222 44.3218 12.0088 42.728C13.6954 41.1343 14.2061 41.0112 17.3958 40.1295C20.5856 39.2477 27.3982 39.4152 28.1172 42.0688C28.8363 44.7223 26.6549 45.7003 25.7336 46.4877C24.8123 47.2751 21.8185 48.3923 20.4425 48.7804Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M17.7625 40.0359C16.003 40.3599 13.4142 40.8758 10.8149 40.4248C8.21546 39.9739 6.58348 38.8644 5.83122 36.2893C5.07897 33.7141 5.44042 32.6945 7.69158 30.8111C9.94274 28.9276 10.5939 28.8353 14.6711 28.1084C18.7482 27.3814 27.2827 28.5554 27.9605 32.1839C28.6384 35.8125 25.8185 36.8082 24.5958 37.7264C23.3732 38.6446 19.522 39.712 17.7625 40.0359Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M16.3907 28.147C14.1809 28.2314 10.9243 28.4003 7.78403 27.4717C4.64379 26.5432 2.78287 25.0239 2.20134 21.9851C1.61981 18.9463 2.20134 17.849 5.2253 16.0764C8.24926 14.3037 9.0634 14.3037 14.1809 14.1349C19.2983 13.9661 29.6496 16.6672 29.9985 20.8877C30.3474 25.1082 26.7419 25.7835 25.1136 26.6276C23.4853 27.4717 18.6005 28.0626 16.3907 28.147Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M15.2713 14.0678C13.4903 14.1408 10.8656 14.2867 8.33461 13.4841C5.80367 12.6815 4.30382 11.3682 3.83513 8.74141C3.36643 6.11466 3.83513 5.16615 6.27235 3.63388C8.70957 2.1016 9.36574 2.10162 13.4903 1.95569C17.6148 1.80976 25.9576 4.14463 26.2388 7.79286C26.52 11.4411 23.6141 12.0248 22.3018 12.7545C20.9894 13.4841 17.0524 13.9948 15.2713 14.0678Z"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />
          </g>
        </svg>
        <div
          style={{
            position: "fixed",
            top: "70%",
            left: "10%",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <motion.div
            style={{
              background: theme.color,
              border: "0.5rem solid black",
              borderRadius: "50%",
              // width: "10rem",
              // height: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: max992
                ? max768
                  ? max480
                    ? "3rem"
                    : "4rem"
                  : "5rem"
                : "10rem",

              // fontSize: "10rem",
              color: theme.textColor,
              cursor: "pointer",
            }}
            whileHover={{
              boxShadow: `0 0 2rem .5rem ${theme.color}`,
              scale: 1.15,
            }}
            whileTap={{ scale: 0.9, rotate: -170 }}
            onClick={() => scroller()}
          >
            <MdOutlineReplay />
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: max992
                ? max768
                  ? max480
                    ? "3rem"
                    : "4rem"
                  : "5rem"
                : "6rem",
              color: "black",
            }}
          >
            Start over
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StartOver;
