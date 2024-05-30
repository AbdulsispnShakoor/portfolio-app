import heroImg from '../assets/images/Group 4.png'
import { svgs } from './svg';


const HeroSection = () => {
  return (
    <section className="flex items-start justify-between gap-4 flex-wrap md:flex-nowrap px-8 lg:px-48 pt-8 lg:-mb-32">
      <div className="text lg:basis-1/2">
        <h2 className="text-4xl font-semibold">
          <span className="inline-block bg-black w-8 h-8"></span> Abdul Shakoor.
        </h2>
        <p className="mt-8">
          Hello! I'm , a passionate UI/UX Designer and MERN Stack Developer with
          a keen eye for detail and a love for creating intuitive digital
          experiences. With a background in both design and development, I bring
          a unique perspective to every project, focusing on crafting not only
          visually stunning interfaces but also ensuring seamless functionality
          and user satisfaction.
        </p>
      </div>
      <div className="image lg:basis-1/2">
        <img src={heroImg} alt="abdul Shakoor"  className='lg:w-2/3 flex items-center justify-center'/>
      </div>
      <div className="text lg:basis-1/2">
        <h2 className="text-4xl font-semibold">
          <span className="inline-block bg-black w-8 h-8"></span> Eduction
        </h2>
        <div className="mt-8">
          <h2> <b>Graduated</b> In Computer Science</h2>
          <h2> Certified From <b>Coursera </b> </h2>
          <h2> Collage From <b>Formen </b>  In Computer Sci</h2>
        </div>
        <section className='flex mt-4'> 
            {
                svgs.map((item) => {
                    return (
                        <div key={item.id} className='m-2 hover:scale-110 2s linear'>
                           <a href="#">{item.file}</a> 
                        </div>
                    )
                })
            }
        </section>
        <div className="flex items-center justify-start gap-2 mt-4">
            <a href='#contact'  className='px-10 py-2 font-semibold text-[#FFE457] bg-black' >Contact</a>
            <a href='../assets/AbdulShakoor.pdf' download className='px-10 py-2 font-semibold border border-black' >Resume</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
