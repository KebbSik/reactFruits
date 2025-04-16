import { useState } from "react";
import Navbar from "./components/Navbar";
import { Fruit } from "./constants/FruitsMap";
import Hero from "./components/Hero";

function App() {
  const [fruit] = useState<Fruit>("banana");

  return (
    <>
      <Navbar />
      <Hero />
      <div style={{ height: "400vh" }}></div>
    </>
  );
}

export default App;
