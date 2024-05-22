import { svgs } from "./svg";

const Contact = () => {
  return (
    <div className="py-8 overflow-x-hidden">
      <div className="flex item-start justify-start lg:item-center lg:justify-center gap-4 flex-wrap lg:flex-nowrap my-8 w-full">
        <div className="line  basis-1/3 h-[2px] bg-black"></div>
        <h2 className="basis-1/3 text-[24px] lg:text-[120px] font-extrabold">
          Contact.
        </h2>
        <div className="line basis-1/3 w-full h-[2px] bg-black mx-auto"></div>
      </div>
      {/* social media */}
      <section className="flex mt-4 items-center justify-center">
        {svgs.map((item) => {
          return (
            <div key={item.id} className="m-2">
              <a href="#">{item.file}</a>
            </div>
          );
        })}
      </section>
      {/* social media */}
      <section className="flex items-center justify-center py-4">
        <div className="flex mx-auto gap-12">
          <p className="font-bold text-2xl">Phone :</p>
          <p className="font-bold text-2xl">0347 1810373</p>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="flex mx-auto gap-12">
          <p className="font-bold text-2xl">Phone :</p>
          <p className="font-bold text-2xl">0331 2589582</p>
        </div>
      </section>
      <section className="flex items-center justify-center py-2">
        <div className="flex mx-auto lg:gap-12 flex-wrap pl-14">
          <p className="font-bold text-2xl">Email :</p>
          <p className="font-bold text-xl">abduldev1786@gamil.com</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
