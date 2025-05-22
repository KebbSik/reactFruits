import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Blank from "./components/Blank";
import ChooseTheme from "./components/ChooseTheme";
import Description from "./components/DescriptionSecion/Description";
import Info from "./components/Info";
import StartOver from "./components/StartOver";
import ScrollSectionContainer from "./components/Tests/ScrollSectionContainer";
import World from "./components/World/World";
import useMaxScreenSize from "./hooks/useMaxScreenSize";

function App() {
  // const scrollcontroller = {}; //percetage controler of scroll
  const { max992 } = useMaxScreenSize();
  const sectionHeight = max992 ? "500vh" : "750vh";
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <ChooseTheme />
      <ScrollSectionContainer height={sectionHeight}>
        <Hero scrollRange={[0, 0.2]} />
      </ScrollSectionContainer>

      <ScrollSectionContainer height={sectionHeight}>
        <Info scrollRange={[0.2, 0.48]} />
      </ScrollSectionContainer>

      <ScrollSectionContainer height={sectionHeight}>
        <Description scrollRange={[0.4, 0.7]} />
      </ScrollSectionContainer>
      <ScrollSectionContainer height={sectionHeight}>
        <World scrollRange={[0.6, 0.8]} />
      </ScrollSectionContainer>

      <StartOver />
      <Blank />
    </div>
  );
}
export default App;
