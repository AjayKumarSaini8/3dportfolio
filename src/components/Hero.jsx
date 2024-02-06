import { useEffect, useRef } from "react";
import { styles } from "../styles";
import { SocialMedia } from ".";
import { SectionWrapper } from "../hoc";
import Typed from 'typed.js'; // Import Typed.js
import headerImg from "../assets/header-img.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Hero = () => {

  const typedRef1 = useRef(null);
  const typedRef2 = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const options = {
      strings: ['Turning Vision Into Reality With Code'],
      typeSpeed: 50,
    };
    const typedInstance = new Typed('#autoType', options);

    // Ensure to destroy Typed instance when the component unmounts
    return () => {
      typedInstance.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>

          <span className={`${styles.heroSubText} text-gray-500`}>WELCOME TO MY WORLD</span>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#8247ff]'>Ajay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Developer <br className='sm:block ' />
            <span id="autoType" className='text-[#915EFF]'></span>
          </p>
          <a
            href='https://drive.google.com/file/d/1VrBtlUugA3JmuIOqWVUYerxsqwys2rBx/view?usp=sharing'
            target='_blank' //
            download='Ajaysaini.pdf'>
            <button className='tracking-wider border-purple-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900'>
              Download Resume
            </button>
          </a>
          <SocialMedia />
        </div>
      </div>
      <div className="lg:flex lg:justify-end lg:items-center lg:h-full">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={`lg:mt-0 mt-4 ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
              <img src={headerImg} alt="Header Img" className="w-36 lg:w-96" />
            </div>}
        </TrackVisibility>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");
