import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";


import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiRedux,
  SiTailwindcss,
  SiAppwrite,
  SiDjango,
  SiMysql,
  SiFirebase
} from "react-icons/si";


const Skills = () => {
  const skills = [

    { name: "HTML", icon: <FaHtml5 className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    { name: "CSS", icon: <FaCss3 className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    { name: "JavaScript", icon: <FaJs className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    {
      name: "C++",
      icon: <SiCplusplus className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' />,
    },
    { name: "React", icon: <FaReact className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    {
      name: "Redux Toolkit",
      icon: <SiRedux className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' />,
    },
    { name: "Django", icon: <SiDjango className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    {
      name: "Appwrite",
      icon: <SiAppwrite className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' />,
    },
    { name: "MySQL", icon: <SiMysql className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' />,
    },
    { name: "Python", icon: <FaPython className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    { name: 'Firebase', icon: <SiFirebase className="text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95" /> },
  ];

  return (
    <>

      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <div className='flex flex-col items-center bg-slate-950 p-4 w-full max-h-screen lg:h-80  justify-center'>
          <h1 className={`${"text-center text-5xl font-bold tracking-wider text-white lg:text-5xl mb-4 mt-12"} ${styles.sectionHeadText}`}>Tech Skills</h1>
          <div className='mt-6 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10'>
            {skills.map((skill, index) => (
              <SkillIcon
                key={index}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </motion.div >
    </>
  );
};

const SkillIcon = ({ name, icon }) => {
  return (
    <div className='flex flex-col items-center'>
      {icon}
      <span className='tracking-wider mt-2 text-white'>{name}</span>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");