import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Circle + Line */}
        <div className="flex flex-col justify-center items-center   mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-custom" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text Name */}
        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className="text-purple-custom"> Binni</span>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop user interfaces and web applications{" "}
              <br className="sm:block hidden" /> using React.js and Javascript
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
