import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology) => (
        <div className="group flex flex-col justify-center text-center">
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          <span className="scale-0 rounded group-hover:scale-100">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};
const TechWrapped = SectionWrapper(Tech, "");
export default TechWrapped;
