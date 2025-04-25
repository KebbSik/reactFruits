import { motion, useScroll, useTransform } from "motion/react";
import { div } from "motion/react-client";
import React from "react";
import Row from "./Row";

interface Props {
  scrollRange?: [number, number];
}
const Description = ({ scrollRange }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Row />
        <Row isReversed />
        <Row />
      </div>
    </div>
  );
};

export default Description;
