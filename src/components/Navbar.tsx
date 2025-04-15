import { div, feSpotLight } from "motion/react-client";
import React, { useState } from "react";
import { Fruit } from "../FruitsMap";
import { addScaleCorrector, easeInOut, motion } from "motion/react";
import useMaxScreenSize from "../useMaxScreenSize";
import { useTheme } from "./ThemeContext";
import { fruitList } from "../FruitsMap";

const Navbar = () => {
  const { max480, max768, max992, max1280, max1400 } = useMaxScreenSize();
  const [isActive, setIsActive] = useState(false);
  const { theme, changeFruit } = useTheme();
  return (
    <>
      {!max768 && (
        <nav
          style={{
            display: "flex",
            // flexDirection: max768 ? "column" : "row",
            flexDirection: "row",
            // gap: max768 ? "1rem" : "",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            minHeight: "4rem",
            background: theme.color,
            color: theme.textColor,
            padding: ".6rem",
          }}
        >
          {/* {max768 && (
          <div
            style={{
              height: "2rem",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() => {
                setIsActive(!isActive);
                console.log(isActive);
              }}
            >
              Burger
            </button>
          </div>
        )} */}
          {fruitList.map((fruit) => (
            <motion.a
              whileHover={{ scale: 1.1, rotate: [-3, 3] }}
              whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
              transition={{ duration: 0.1, ease: easeInOut }}
              style={{
                fontSize: max992 ? "1rem" : "1.3rem",
                padding: max768 ? "0.5rem" : "",
                cursor: "pointer",
              }}
              onClick={() => changeFruit(fruit)}
              key={fruit}
            >
              {fruit.charAt(0).toUpperCase() + fruit.slice(1)}
            </motion.a>
          ))}
        </nav>
      )}
      {max768 && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: max768 ? "1rem" : "",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            minHeight: "4rem",
            background: theme.color,
            color: theme.textColor,
            padding: ".6rem",
          }}
        >
          {max768 && (
            <div
              style={{
                height: "2rem",
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => {
                  setIsActive(!isActive);
                  console.log(isActive);
                }}
              >
                Burger
              </button>
            </div>
          )}
          {fruitList.map((fruit) => (
            <motion.a
              whileHover={{ scale: 1.1, rotate: [-3, 3] }}
              whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
              transition={{ duration: 0.1, ease: easeInOut }}
              style={{
                scale: isActive ? 1 : 0,
                fontSize: max992 ? "1rem" : "1.3rem",
                padding: max768 ? "0.5rem" : "",
                cursor: "pointer",
              }}
              onClick={() => changeFruit(fruit)}
              key={fruit}
            >
              {fruit.charAt(0).toUpperCase() + fruit.slice(1)}
            </motion.a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
