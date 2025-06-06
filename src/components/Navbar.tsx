import { easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { fruitList } from "../constants/FruitsMap";
import { useTheme } from "../contexts/ThemeContext";
import useMaxScreenSize from "../hooks/useMaxScreenSize";

const Navbar = () => {
  const { max480, max768, max992 } = useMaxScreenSize();
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
          id="start"
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
            zIndex: 999,
          }}
        >
          {fruitList.map((fruit) => (
            <motion.a
              whileHover={{ scale: 1.1, rotate: [-3, 3] }}
              whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
              transition={{ duration: 0.1, ease: easeInOut }}
              style={{
                zIndex: 999,
                fontSize: max992 ? "1rem" : "1.3rem",
                padding: max768 ? "0.5rem" : "0.35rem",
                cursor: "pointer",

                boxShadow:
                  theme.name === fruit
                    ? "0 0 30px 15px rgba(255, 255, 255, 0.7)"
                    : "none",
                borderRadius: "50px",
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
          id="start"
          style={{
            position: "relative",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
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
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsActive(!isActive);
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
            }}
          >
            {fruitList.map((fruit) => (
              <motion.a
                initial={{ height: 0, opacity: 0 }}
                animate={
                  isActive
                    ? { height: "auto", opacity: 1, y: -5 }
                    : { height: 0, opacity: 0, y: -10, pointerEvents: "none" }
                }
                whileHover={{ scale: 1.1, rotate: [-3, 3] }}
                whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                transition={{ duration: 0.3, ease: easeInOut }}
                style={{
                  fontSize: max480 ? "1rem" : "1.3rem",
                  padding: "0.8rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  changeFruit(fruit);
                  setIsActive(false);
                }}
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
