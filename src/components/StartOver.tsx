import React, { useState } from "react";
import { fruitList, themeMap, Fruit } from "../constants/FruitsMap";
import { useTheme } from "../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";

import { animateScroll as scroll } from "react-scroll";
import { MdOutlineReplay } from "react-icons/md";

const StartOver = () => {
  const { theme, changeFruit } = useTheme();
  const [isScrolling, setIsScrolling] = useState(false);

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
              fontSize: "8rem",
            }}
          >
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              exit={{ y: -200 }}
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
            style={{ transformOrigin: "175px 175px" }}
          />
          <path
            d="M-550 300 L 1670 980 L 2100 980 L -600 1080 "
            fill={theme.transparentColor}
            strokeWidth={1}
            // stroke="red"
            style={{
              transition: "all 1s ease",
            }}
          />
          <path
            d="M-550 300L550 650V250L825 325V730L1550 940V0H-550"
            stroke="black"
            fill={theme.color}
            strokeWidth={"0.5rem"}
            style={{
              transition: "all 1s ease",
            }}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M550 250L300 300V700L550 650V250Z"
            fill="#CD9A65"
            stroke="black"
            strokeWidth={"0.5rem"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M407 331L347 346.205V481L407 465.32V331Z" fill="#CD9A65" />
          <path
            d="M407 494.453L347 509.658V637L407 621.32V494.453Z"
            fill="#CD9A65"
          />

          <g stroke-linecap="round" stroke-linejoin="round">
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
        </svg>
        <div
          style={{
            position: "fixed",
            top: "70%",
            left: "10%",
            display: "flex",
            gap: "1rem",
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
              fontSize: "10rem",
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
              fontSize: "6rem",
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
