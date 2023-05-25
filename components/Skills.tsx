import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {
  directionLeft?: boolean;
};

export default function Skills({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to see it`s name
      </h3>

      <div className="grid grid-cols-4 gap-5 pt-10">
        {/* <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}

        {/* Nota para mi yo del futuro: Tratar de mejorar este copy paste */}
        {/* Logo React */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684918421/React-Logo_lviry9.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">React</p>
            </div>
          </div>
        </div>

        {/* Logo Redux */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684918637/Redux-Logo_se7bqn.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">Redux</p>
            </div>
          </div>
        </div>

        {/* Logo NodeJS */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1677020928/Portfolio/logo-nodejs_w8sqso.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">NodeJS</p>
            </div>
          </div>
        </div>

        {/* Logo JavaScript */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1677020928/Portfolio/logo-js_fyvfcx.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">JS</p>
            </div>
          </div>
        </div>

        {/* Logo Express */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684917010/express_ugwplt.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">Express</p>
            </div>
          </div>
        </div>

        {/* Logo Tailwind css */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684916951/tailwind_jwg74o.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">Tailwind</p>
            </div>
          </div>
        </div>

        {/* Logo JavaScript */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684917611/MongoDB-Logo_wprecn.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">Mongo</p>
            </div>
          </div>
        </div>

        {/* Logo GitHub */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1677020928/Portfolio/logo-github_ok3e8b.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">GitHub</p>
            </div>
          </div>
        </div>

        {/* Logo NextJS */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684918207/NextJS-Logo_fost0b.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">NextJS</p>
            </div>
          </div>
        </div>

        {/* Logo TypeScripts */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684967140/tsLogo_vz1hoa.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">TS</p>
            </div>
          </div>
        </div>

        {/* Logo RamiMore */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1678138364/Portfolio/rami-icon_xr9eko.png"
            alt=""
            className="rounded-full border border-gray-500 object-cover w-16 h-16
                      xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
                    group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">More...</p>
            </div>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
