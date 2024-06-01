import { sliderTechSvg } from "./sliderTechSvg";

const TechSlider = () => {
  return (
    <div className="bg-black overflow-x-hidden text-white py-8  flex items-center justify-between logos">
      <div className="logos-slide whitespace-nowrap flex gap-2 items-center">
        {sliderTechSvg.map((svg) => {
          return (
            <div
              key={svg.id}
              className="lg:w-56 flex gap-2 lg:gap-3 p-3 logo items-center justify-center hover:scale-150 transition-all 2s linear"
            >
              <h2> {svg.title} </h2>
              <p> {svg.file}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechSlider;
