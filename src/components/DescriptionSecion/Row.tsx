import React from "react";
import blank from "../../assets/blank.png";
import { wrap } from "motion";

interface Props {
  isReversed?: boolean;
}
const Row = ({ isReversed }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        // flexWrap: "wrap",
        width: "50rem",
        gap: "2rem",
        flexDirection: isReversed ? "row-reverse" : "row",
        border: "1px solid black",
        padding: "2rem",
      }}
    >
      <img
        src={blank}
        alt="#"
        style={{ border: "1px solid black", width: "20rem" }}
      />
      <div
        style={{
          textWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, amet
        alias incidunt qui est quis optio maiores reprehenderit at blanditiis
        provident nobis quasi doloribus. Facilis eveniet ratione tenetur aut
        necessitatibus quae, sint alias dolores minus a culpa libero suscipit,
        voluptatum, quis laborum fuga consectetur sit? Tempore quae nulla cum
        quasi?
      </div>
    </div>
  );
};

export default Row;
