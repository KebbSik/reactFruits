import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSectionTest = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // stick at top, unstick at bottom
  });

  return (
    <section
      // ref={ref}
      style={{
        position: "relative",
        height: "400vh", // double screen height for scroll room
        border: "1px solid red",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          zIndex: 1,
        }}
      >
        {/* <motion.div style={{ scale }}>{children}</motion.div> */}
        <motion.div>{children}</motion.div>
      </div>
    </section>
  );
};

export default ScrollSectionTest;
