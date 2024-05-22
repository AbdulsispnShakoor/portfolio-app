import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import LargeText from "./components/LargeText"
import MYStack from "./components/MYStack"
import Services from "./components/Services"
import Top from "./components/Top"
import Work from "./components/Work"


const App = () => {
  return (
    <div>
      <Top />
      <HeroSection />
      <LargeText />
      <Work />
      <Services />
      {/* <MYStack /> */}
      <Contact />
    </div>
  )
}

export default App