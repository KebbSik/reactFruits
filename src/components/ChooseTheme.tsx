// import { transform } from "motion";
import { useState } from "react";
import { fruitList, themeMap } from "../constants/FruitsMap";
import { useTheme } from "../contexts/ThemeContext";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { HiChevronRight } from "react-icons/hi";
import useMaxScreenSize from "../hooks/useMaxScreenSize";

const ChooseTheme = () => {
  const { theme, changeFruit } = useTheme();
  const { scrollY } = useScroll();
  const { max768 } = useMaxScreenSize();
  const [isActive, setIsActive] = useState(false);
  const changeVisibility = () => {
    if (max768) {
      setIsActive(!isActive);
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 64);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      // transition={{ duration: 0.3, ease: "linear" }}
    >
      <div
        style={{
          position: "fixed",
          width: "120vw",
          height: "120vh",
          top: 0,
          left: 0,
          // display: isActive ? "block" : "none",
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? "auto" : "none",
          zIndex: 9,
          backgroundColor: "rgba(0, 0, 0, .7)",
          transition: "all 0.3s ease",
        }}
        onClick={() => setIsActive(!isActive)}
      ></div>
      <motion.div
        style={{
          position: "fixed",
          // left: 0,
          top: "50%",
          // transform: "translate(0%,-50%)",
          zIndex: 10,
          border: "5px solid rgb(137, 137, 137)",
          borderLeft: 0,
          background: "#fff",
          borderRadius: " 0px 40px 40px 0px",
          padding: "16px 16px",
          // x: "-100%",
          x: max768 ? (isActive ? 0 : "-100%") : "-100%",
          y: "-50%",
          transition: "transform 0.3s linear",
        }}
        whileHover={{ x: 0 }}
        // transition={{ duration: 0.5, ease: "linear" }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // width: "5rem",
            gap: "1.15rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              fontSize: "4rem",
              fontWeight: 600,
              color: "rgb(137, 137, 137)",
              zIndex: 0,
              top: "50%",
              left: "100%",
              width: "2.5rem",
              height: "4rem",
              transform: "translate(50%,-50%)",
              border: "5px solid rgb(137, 137, 137)",
              borderLeft: 0,
              borderRadius: "0 50% 50% 0",
              // borderTopRightRadius:'50%',
              // borderBottomRightRadius:50%
              background: "#fff",
              // justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            onClick={() => changeVisibility()}
          >
            <HiChevronRight
              style={{
                transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s linear",
              }}
            />
          </div>
          {fruitList.map((fruit) => (
            <div key={fruit} onClick={() => changeFruit(fruit)}>
              <motion.div
                style={{
                  padding: 5,
                  background:
                    theme.name === fruit ? theme.transparentColor : "#fff",
                  borderRadius: "50%",
                  border: `5px solid ${themeMap[fruit].color}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  // width: theme.name === fruit ? "4rem" : "5rem",
                  // height: theme.name === fruit ? "4rem" : "5rem",
                  width: "3.5rem",
                  height: "3.5rem",
                  scale: theme.name === fruit ? 1.5 : 1,
                  transition: "all .1s easeInOut",
                }}
                whileHover={{ scale: theme.name === fruit ? 1.5 : 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  style={{ height: "4rem", width: "70%", objectFit: "contain" }}
                  src={themeMap[fruit].svgUrl}
                  alt={fruit}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseTheme;
