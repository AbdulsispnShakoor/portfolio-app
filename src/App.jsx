import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import LargeText from "./components/LargeText"
// import MYStack from "./components/MYStack"
import Services from "./components/Services"
import TechSlider from "./components/TechSlider"
import Top from "./components/Top"
import Work from "./components/Work"


const App = () => {
  return (
    <div>
      <Top />
      <HeroSection />
      <LargeText />
      <Work />
      <TechSlider />
      <Services />
      {/* <MYStack /> */}
      <Contact />
    </div>
  )
}

export default App