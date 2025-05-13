import React from "react";

const ScrollStick = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ height: "100vh", position: "relative", background: "#f0f0f0" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollStick;
