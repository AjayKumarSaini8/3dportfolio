import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <p className="text-center text-5xl font-bold">Skills</p>
      <div className='flex flex-row flex-wrap justify-center gap-8 mt-4'>
        {technologies.map((technology) => (
          <div className='w-32 h-32 flex flex-col items-center' key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} />
            <p className="text-center mt-2 text-sm font-semibold">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
