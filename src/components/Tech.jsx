import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <p className={`${"text-center text-5xl font-bold"} ${styles.sectionHeadText}`}>Skills</p>
        <div className='flex flex-row flex-wrap justify-center gap-8 mt-4 '>
          {technologies.map((technology) => (
            <div className='w-32 h-32 flex flex-col items-center rounded-lg hover:shadow-lg hover:shadow-purple-500 hover:scale-125' key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
              <p className="text-center mt-2 text-sm font-semibold"> {technology.name}</p>
            </div>
          ))}
        </div>
      </motion.div >
    </>
  );
};

export default SectionWrapper(Tech, "skills");
