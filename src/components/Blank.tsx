import React from "react";

const Blank = () => {
  return (
    <div
      style={{
        // width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: -1,
      }}
    ></div>
  );
};

export default Blank;
