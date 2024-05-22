// import image01 from "../assets/images/Rectangle 29.png";
// import image02 from "../assets/images/Rectangle 30.png";
// import image03 from "../assets/images/Rectangle 31.png";

// const servicesList = [
//   {
//     id: 1,
//     image: image01,
//     title: "UI / UX Design",
//   },
//   {
//     id: 2,
//     image: image02,
//     title: "Front-End Development",
//   },
//   {
//     id: 3,
//     image: image03,
//     title: "Back-End Development",
//   },
// ];
import { CgDesignmodo } from "react-icons/cg"
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbAdjustmentsCode } from "react-icons/tb";
import { SiPayloadcms } from "react-icons/si";

const Services = () => {
  return (
    <div>
      <div className="flex item-start justify-start lg:item-center lg:justify-center gap-4 flex-wrap lg:flex-nowrap my-8 w-full">
        <div className="line  basis-1/3 h-[2px] bg-black"></div>
        <h2 className="basis-1/3 text-[24px] lg:text-[120px] font-extrabold">
          Services.
        </h2>
        <div className="line basis-1/3 w-full h-[2px] bg-black mx-auto"></div>
      </div>
 <section className="py-10 bg-white">
  <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-16">

    <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:mt-8 lg:gap-x-4 ">
      <div className="transition-all duration-200 bg-white hover:shadow-xl">
        <div className="py-10 px-9">
          <CgDesignmodo size={48} style={{background:"black", color: "#FFE457"}}/>
          <h3 className="mt-8 text-lg font-semibold text-black">UX / UI Design</h3>
          <p className="mt-4 text-base text-gray-600">Crafting intuitive and visually appealing interfaces that ensure a seamless user experience. My designs not only look great but also enhance usability and engagement.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-white hover:shadow-xl">
        <div className="py-10 px-9">
          <SiPayloadcms size={48} style={{background:"black", color: "#FFE457"}}/>
          <h3 className="mt-8 text-lg font-semibold text-black">CMS Development</h3>
          <p className="mt-4 text-base text-gray-600">Empowering you with flexible and scalable content management solutions. Specializing in WordPress,Webflow, Shopify, and Wix, Development in CMS that make content creation and management effortless.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-white hover:shadow-xl">
        <div className="py-10 px-9">
        <RiCodeSSlashFill size={48} style={{background:"black", color: "#FFE457"}}/>
          <h3 className="mt-8 text-lg font-semibold text-black">Front-End Development</h3>
          <p className="mt-4 text-base text-gray-600">Building responsive and dynamic front-end solutions that bring your designs to life. My code is clean, efficient, and optimized for performance across all devices.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-white hover:shadow-xl">
        <div className="py-10 px-9">
        <TbAdjustmentsCode  size={48} style={{background:"black", color: "#FFE457"}}/>
          <h3 className="mt-8 text-lg font-semibold text-black">Back-End Development</h3>
          <p className="mt-4 text-base text-gray-600">Developing robust and secure backend systems that support your application's functionality. My backend solutions ensure smooth performance, scalability, and data integrity.</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Services;
