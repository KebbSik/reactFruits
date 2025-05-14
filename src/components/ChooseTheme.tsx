import { transform } from "motion";
import { fruitList, themeMap } from "../constants/FruitsMap";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "motion/react";

const ChooseTheme = () => {
  const { theme, changeFruit } = useTheme();
  //  const [isActive, setIsActive] = useState(false);
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: "50%",
        transform: "translate(25%,-50%)",
        display: "flex",
        flexDirection: "column",
        width: "5rem",
        zIndex: 10,
        gap: "1rem",
      }}
    >
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
  );
};

export default ChooseTheme;
