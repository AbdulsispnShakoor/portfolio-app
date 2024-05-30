import { useEffect, useState } from "react"
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import LargeText from "./components/LargeText"
import Services from "./components/Services"
import TechSlider from "./components/TechSlider"
import Top from "./components/Top"
import Work from "./components/Work"


const App = () => {
const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0})

let mouseMove = (e) => {
  setCursorPosition({
    x: e.clientX,
    y: e.clientY,
  })
}

useEffect(()=>{

  window.addEventListener("mousemove",  mouseMove);

  return () =>{
    window.removeEventListener("mousemove",mouseMove);
 
  }

},[cursorPosition])

  return (
    <div className="relative">
      <div className={`mouse w-16 h-16 lg:w-24 lg:h-24 bg-black rounded-full absolute right-[${cursorPosition.x}px] top-[${cursorPosition.y}px]`}></div>
      <Top />
      <HeroSection />
      <LargeText />
      <Work />
      <TechSlider />
      <Services />
      <Contact />
    </div>
  )
}

export default App