import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Blank from "./components/Blank";
import ChooseTheme from "./components/ChooseTheme";
import Description from "./components/DescriptionSecion/Description";
import Info from "./components/Info";
import StartOver from "./components/StartOver";
import ScrollSectionContainer from "./components/Tests/ScrollSectionContainer";
import World from "./components/World/World";

function App() {
  // const scrollcontroller = {}; //percetage controler of scroll
  const sectionHeight = "800vh";
  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <ScrollSectionContainer height={sectionHeight}>
        <Hero scrollRange={[0, 0.2]} />
      </ScrollSectionContainer>

      <ScrollSectionContainer height={sectionHeight}>
        {/* <FruitLine scrollRange={[0.2, 0.3]} />
        <FruitInfo scrollRange={[0.3, 0.4]} /> */}
        <Info scrollRange={[0.2, 0.4]} />
      </ScrollSectionContainer>

      <ScrollSectionContainer height={sectionHeight}>
        <Description scrollRange={[0.4, 0.6]} />
      </ScrollSectionContainer>
      <ScrollSectionContainer height={sectionHeight}>
        <World scrollRange={[0.6, 0.8]} />
      </ScrollSectionContainer>

      <StartOver />
      <Blank />
      <ChooseTheme />
    </div>
  );
}
export default App;
