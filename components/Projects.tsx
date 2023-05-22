import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="w-full h-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
               items-center justify-center p-20 md:p-[32rem] h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // className="pt-20"
              src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1671572251/usi42gctv5mmsfbectzj.jpg"
              alt=""
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                UPS clone
              </h4>
              <p className="text-sm text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                sint repudiandae, necessitatibus est a amet recusandae totam
                explicabo, quo rem consectetur corporis reiciendis harum
                quaerat, tempora consequuntur quos consequatur ut.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}
