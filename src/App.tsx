import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Fruit } from "./constants/FruitsMap";

function App() {
  const [fruit, setFruit] = useState<Fruit>("banana");
  const theme = {
    banana: { color: "#e8ca0c", textColor: "#fff" },
    watermelon: { color: "#e75fa6", textColor: "#fff" },
    apple: { color: "#1fc205", textColor: "#fff" },
    strawberry: { color: "#e33502", textColor: "#fff" },
    peach: { color: "#f66a09", textColor: "#fff" },
  };
  return (
    <>
      <Navbar />
      hello {fruit}
    </>
  );
}

export default App;
