import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div
      className='shadow-purple-800 hover:shadow-purple-500 rounded-[50px] shadow-card'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-blur  p-5  sm:w-full md:w-[360px] w-full bg-blur bg-white/5 rounded-[50px] py-5 px-5 min-h-[280px] flex-row"
      >
        <div className="relative w-full h-[230px] sm:h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain hover:scale-125"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-xl sm:text-lg">{name}</h3>
          <p className="mt-2 text-secondary text-sm sm:text-xs">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-sm sm:text-xs ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={`lg:mt-0 mt-4 ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
              <p className={`${styles.sectionSubText} `}>My work</p>
              <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </div>}
        </TrackVisibility>
      </div>

      <div className="w-full flex">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={`lg:mt-0 mt-4 ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
              <p className="mt-3 text-secondary text-base sm:text-sm max-w-3xl">
                Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
              </p>
            </div>}
        </TrackVisibility>
      </div>

      <TrackVisibility>
        {({ isVisible }) =>
          <div className={`lg:mt-0 mt-4 ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
            <div className="mt-10 sm:mt-20 flex flex-wrap gap-4 sm:gap-7">
              {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
              ))}
            </div>
          </div>}
      </TrackVisibility>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
