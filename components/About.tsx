import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-28 uppercase tracking-[20px] 
      text-gray-500 text-2xl"
      >
        About
      </h3>
      <div className="pt-11">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          src="https://avatars.githubusercontent.com/u/96086242?v=4"
          alt="perfil"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[700px] xl:h-[400px]"
        />
      </div>
      <div className="space-y-7 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here`s a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          With a passion for back-end development and a drive to stay ahead in
          the ever-evolving tech landscape, I dedicated myself to mastering this
          area. Continuous learning and growth are at the core of my
          professional philosophy, and I'm excited to explore new opportunities
          where I can apply my skills and contribute to cutting-edge projects.
          If you have any exciting projects, collaboration opportunities, or
          simply want to connect, feel free to reach out! Let's push the
          boundaries of what's possible together!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
