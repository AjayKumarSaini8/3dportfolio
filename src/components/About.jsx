import React from "react";
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full md:w-1/2 lg:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full shadow-purple-900 hover:shadow-purple-500 rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-blur bg-white-100/50 rounded-[20px] p-7 min-h-[200px] flex justify-evenly items-center flex-col py-5 px-12 
          md:min-h-[280px]`}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] md:text-[15px] md:pl-0 md:w-20 font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-4xl font-semibold"> I Know That <span className='text-[#915EFF]'>Good Developer</span></p>
        <p className="text-4xl font-semibold"> Means  <span className='text-[#915EFF]'>Good Business</span></p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with expertise in Python, JavaScript
        and frameworks like React and Django.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
