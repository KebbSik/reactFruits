import React, { useState } from "react";
import { fruitList, themeMap, Fruit } from "../constants/FruitsMap";
import { useTheme } from "../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";

import { animateScroll as scroll } from "react-scroll";

const StartOver = () => {
  const { theme, changeFruit } = useTheme();
  const [isScrolling, setIsScrolling] = useState(false);

  const scroller = (fruit: Fruit) => {
    setIsScrolling(true);

    scroll.scrollToTop({
      duration: 1500,
      smooth: "easeInOutQuad",
    });

    setTimeout(() => {
      setIsScrolling(false);
      setTimeout(() => {
        changeFruit(fruit);
      }, 200);
    }, 2000);
  };

  return (
    <div
      style={{
        // position: "relative",
        position: "fixed",
        top: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.transparentColor,
        // zIndex: isScrolling ? 1 : 0,
        zIndex: -1,
      }}
    >
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
            }}
          />
        )}
      </AnimatePresence>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "90vw",
          height: "90vh",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {fruitList.map((fruit) => (
          <div
            style={{
              width: "25%",
              // backgroundColor: themeMap[fruit].color,
              textAlign: "center",
              color: themeMap[fruit].textColor,
              // borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              gap: "1rem",
              cursor: "pointer",
            }}
            key={fruit}
            onClick={() => scroller(fruit)}
          >
            {fruit.charAt(0).toUpperCase() + fruit.slice(1)}
            <div
              style={{
                background: "#fff",
                borderRadius: "50%",
                width: "70%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "80%", width: "80%", objectFit: "contain" }}
                src={themeMap[fruit].svgUrl}
                alt={fruit}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartOver;
