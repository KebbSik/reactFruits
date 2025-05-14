import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// interface Props {
//   height: string;
// }

const ScrollSectionContainer = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height: string;
}) => {
  return (
    <section
      style={{
        position: "relative",
        // height: "400vh",
        height: height,

        // border: "1px solid red",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          position: "sticky",
          top: 0,
          height: "100vh",
          // width: "100vw",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          background: "#fff",
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            // alignItems: "center",
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSectionContainer;
