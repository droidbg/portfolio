import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/index";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ service, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      {/* fadeIn: direction, type, delay, duration */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img
            src={service.icon}
            alt="icon"
            className="
          w-16 h-16 object-contain
          "
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in
        <span className={styles.aboutKeyTech}>&nbsp;TypeScript&nbsp;</span>
        and&nbsp;
        <span className={styles.aboutKeyTech}>JavaScript,&nbsp; </span>
        and expertise in frameworks like
        <span className={styles.aboutKeyTech}> &nbsp;React, Node.js</span>. I'm
        a quick learner who builds efficient, scalable, and user-friendly
        solutions to solve real-world problems. Let's work together to bring
        ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  );
};
const AboutP = SectionWrapper(About, "about");
export default AboutP;
