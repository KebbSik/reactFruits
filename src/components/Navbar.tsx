import { div, feSpotLight } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { Fruit } from "../FruitsMap";
import { addScaleCorrector, easeInOut, motion } from "motion/react";
import useMaxScreenSize from "../useMaxScreenSize";
import { useTheme } from "./ThemeContext";
import { fruitList } from "../FruitsMap";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { max480, max768, max992, max1280, max1400 } = useMaxScreenSize();
  const [isActive, setIsActive] = useState(false);
  const { theme, changeFruit } = useTheme();

  useEffect(() => {
    if (!max768) {
      setIsActive(false);
    }
  }, [max768]);
  return (
    <>
      {!max768 && (
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            minHeight: "4rem",
            background: theme.color,
            color: theme.textColor,
            padding: ".6rem",
          }}
        >
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
            // gap: max768 ? "1rem" : "",
            // alignItems: "center",
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
                alignItems: "center",
              }}
            >
              <motion.div animate={isActive ? { rotate: -90 } : { rotate: 0 }}>
                <GiHamburgerMenu
                  style={{
                    fontSize: max480 ? "2rem" : "2.5rem",
                  }}
                  onClick={() => {
                    setIsActive(!isActive);
                    console.log(isActive);
                  }}
                ></GiHamburgerMenu>
              </motion.div>
            </div>
          )}
          <motion.div
            id="mobileNav"
            initial={{ height: 0, opacity: 0 }}
            animate={
              isActive
                ? { height: "auto", opacity: 1, y: -5 }
                : { height: 0, opacity: 1, y: -10 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "4rem",
              left: 0,
              width: "100%",
              backgroundColor: theme.transparentColor,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backdropFilter: "blur(4px)",
              borderRadius: "0 0 3% 3%",
              // height: isActive ? "" : 0,
            }}
          >
            {fruitList.map((fruit) => (
              <motion.a
                whileHover={{ scale: 1.1, rotate: [-3, 3] }}
                whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                transition={{ duration: 0.1, ease: easeInOut }}
                style={{
                  fontSize: max480 ? "1rem" : "1.3rem",
                  padding: "0.8rem",
                  cursor: "pointer",
                }}
                onClick={() => changeFruit(fruit)}
                key={fruit}
              >
                {fruit.charAt(0).toUpperCase() + fruit.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
