import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import useMaxScreenSize from "../../hooks/useMaxScreenSize";

interface Props {
  isReversed?: boolean;
}

const Row = ({ isReversed }: Props) => {
  const { max1280, max992, max768, max480 } = useMaxScreenSize();
  const { theme } = useTheme();
  const firstLetter = theme.name[0].toLowerCase();

  const paragraph = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, amet
  alias incidunt qui est quis optio maiores reprehenderit at blanditiis
  provident nobis quasi doloribus. Facilis eveniet ratione tenetur aut
  necessitatibus quae, sint alias dolores minus a culpa libero suscipit,
  voluptatum, quis laborum fuga consectetur sit? Tempore quae nulla cum
  quasi?`;

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexDirection: isReversed ? "row-reverse" : "row",
        border: "3px solid black",
        padding: max1280 ? "1rem" : "2rem",
        background: "white",
        borderRadius: 50,
      }}
    >
      <div
        style={{
          textWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: max1280 ? (max768 ? "1.5rem" : "1rem") : "1.6rem",
            fontWeight: "bold",
          }}
        >
          Title
        </p>

        <p
          style={{
            // fontSize: max1280 ? (max768 ? "1rem" : "0.9rem") : "1rem",
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          {paragraph.split("").map((char, i) => (
            <span
              key={i}
              style={{
                color:
                  char.toLowerCase() === firstLetter ? theme.color : "black",
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Row;
