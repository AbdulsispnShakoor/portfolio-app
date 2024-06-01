import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Top = () => {
  useGSAP(() => {
    gsap.from(".large-text",{
        duration: 4,
        y: -10,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        yoyo: true
        
    })
});
  return (
    <main id='intro'  className="flex items-center justify-center w-full pb-16 overflow-hidden">
      <h1 className="text-[48px] md:text-[140px] lg:text-[200px] large-text font-extrabold leading-none text-center text-[#CECECE] pt-4">
        ME<b className="text-black">R</b>N STA<b className="text-black">C</b>K
        DEVEL<b className="text-black">O</b>PER.
      </h1>
    </main>
  );
};

export default Top;
