import React from "react";

import { fruitList, themeMap } from "../constants/FruitsMap";

import { div } from "motion/react-client";
import { useTheme } from "../contexts/ThemeContext";
const StartOver = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "90vw",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {fruitList.map((fruit) => (
        <div
          style={{
            width: "25%",
            backgroundColor: themeMap[fruit].color,
            textAlign: "center",
            color: themeMap[fruit].textColor,
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            gap: "1rem",
            cursor: "pointer",
          }}
          key={fruit}
          onClick={() => console.log("Start Over!")}
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
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartOver;
