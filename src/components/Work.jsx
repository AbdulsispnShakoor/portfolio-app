import { useState } from "react";
import { slideContant } from "./slideContant";

const Work = () => {
  const [slide, setSlide] = useState(slideContant[0]);
  return (
    <>
      <div className="flex item-start justify-start lg:item-center lg:justify-center gap-4 flex-wrap lg:flex-nowrap my-8 w-full">
        <div className="line  basis-1/3 h-[2px] bg-black"></div>
        <h2 className="basis-1/3 text-[24px] lg:text-[120px] font-extrabold">
          WORK.
        </h2>
        <div className="line basis-1/3 w-full h-[2px] bg-black mx-auto"></div>
      </div>
    <div className="flex items-center justify-between gap-4 flex-col px-4 lg:px-48 pt-8">

      {/* slider */}
      <div className="arrows py-2 flex items-end justify-end gap-8 w-full ">
        <button
          className={`arrow-left ${slide == slideContant[0] ? 'hidden' :'block'}`}
          onClick={() =>
            setSlide(slideContant[slideContant.indexOf(slide) - 1])
          }
        >
          <svg
            width={33}
            height={16}
            viewBox="0 0 33 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM33 7L1 7V9L33 9V7Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          className={`arrow-left ${slide == slideContant[4] ? 'hidden' :'block'}`}
          onClick={() =>
            setSlide(slideContant[slideContant.indexOf(slide) + 1])
          }
        >
          <svg
            width={33}
            height={16}
            viewBox="0 0 33 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.7071 8.70711C33.0976 8.31659 33.0976 7.68342 32.7071 7.2929L26.3431 0.928934C25.9526 0.53841 25.3195 0.53841 24.9289 0.928934C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM-8.74228e-08 9L32 9L32 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-start justify-between flex-col md:flex-row  w-full h-full pb-16">
        <div className="text lg:basis-52 flex items-start justify-between flex-col">
            <h3 className="lg:basis-1/3 text-[64px] lg:text-[200px] font-extrabold">
              {slide.id}.
            </h3>
            <p className="text-[18px] ">
              {slide.title}
            </p>
  
        </div>
        <div className="img basis-3/4 flex items-start justify-end">
            <img src={slide.image} alt={slide.title} className="shadow-2xl lg:w-2/4"/>
        </div>
      </div>
      {/* slider */}
    </div>
    </>
  );
};

export default Work;
