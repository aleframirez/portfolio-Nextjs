import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import Link from "next/link";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-28 uppercase tracking-[20px] 
      text-gray-500 text-2xl"
      >
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll pt-24 snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {/* <ExperienceCard />
         <ExperienceCard />
         <ExperienceCard />
         <ExperienceCard /> */}
         <Link href="https://henry-film.vercel.app/">
          <article
            className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 
      w-[300px] md:w-[400px] xl:w-[470px] snap-center bg-[#292929] p-10 hover:opacity-100 
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
              src="https://res.cloudinary.com/dgnco8bh4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1684871555/HenryFilms_r3fa3b.png"
              alt="HenryFilmLogo"
            />

            <div className="px-0 md:px-10">
              <h4 className="text-3xl font-light">Back-End Developer</h4>
              <p className="font-bold text-xl mt-1">HenryFilms</p>
              <div className="flex space-x-2 my-2">
                <img
                  className="w-8 h-8 rounded-xl"
                  src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1677020928/Portfolio/logo-js_fyvfcx.png"
                  alt="js"
                />
                <img
                  className="w-8 h-8 rounded-xl"
                  src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1677020928/Portfolio/logo-nodejs_w8sqso.png"
                  alt="NodeJS"
                />
                <img
                  className="w-8 h-8 rounded-xl"
                  src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1684917010/express_ugwplt.png"
                  alt="Express"
                />
                <img
                  className="w-8 h-8 rounded-xl"
                  src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,o_100,r_max,w_1000/v1684918421/React-Logo_lviry9.png"
                  alt="React"
                />
                <img
                  className="w-8 h-8 rounded-xl"
                  src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1677020929/Portfolio/logo-redux_wd7v8k.png"
                  alt="Redux"
                />
              </div>
              <p className="uppercase py-3 text-gray-500">Henry</p>

              <ul className="list-disc space-y-3 ml-5 text-lg">
                <li>Endpoints creations</li>
                <li>Database management</li>
                <li>Payment gateway implementation</li>
                <li>Admin panel implementation</li>
              </ul>
            </div>
          </article>
         </Link>

        {/* Experiencia 2 */}
        <article
          className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 
    w-[300px] md:w-[400px] xl:w-[470px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
            src="https://t3.ftcdn.net/jpg/01/56/81/24/360_F_156812443_ei1g14S0PIRcTvn32lCNTMzvrYsBkY8F.jpg"
            alt="dogLogo"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-3xl font-light">Full-Stack Developer</h4>
            <p className="font-bold text-xl mt-1">Dogs House</p>
            <div className="flex space-x-2 my-2">
            <img
                className="w-8 h-8 rounded-xl"
                src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1677020928/Portfolio/logo-js_fyvfcx.png"
                alt="js"
              />
              <img
                className="w-8 h-8 rounded-xl"
                src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1677020928/Portfolio/logo-nodejs_w8sqso.png"
                alt="NodeJS"
              />
              <img
                className="w-8 h-8 rounded-xl"
                src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1684917010/express_ugwplt.png"
                alt="Express"
              />
              <img
                className="w-8 h-8 rounded-xl"
                src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,o_100,r_max,w_1000/v1684918421/React-Logo_lviry9.png"
                alt="React"
              />
              <img
                className="w-8 h-8 rounded-xl"
                src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1677020929/Portfolio/logo-redux_wd7v8k.png"
                alt="Redux"
              />
            </div>
            <p className="uppercase py-3 text-gray-500">Personal</p>

            <ul className="list-disc space-y-3 ml-5 text-lg">
              <li>Endpoints creations</li>
              <li>Database management</li>
              <li>Handling styles</li>
              <li>...</li>
            </ul>
          </div>
        </article>

        {/* Experiencia 3
        <article
          className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 
    w-[300px] md:w-[400px] xl:w-[470px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1683768022/zquu5x72jnqrwwxvnmec.png"
            alt="pokemonLogo"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-3xl font-light">Front-End Developer</h4>
            <p className="font-bold text-xl mt-1">Pokemon</p>
            <div className="flex space-x-2 my-2">
            <img
                className="w-8 h-8 rounded-xl"
                src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1684967140/tsLogo_vz1hoa.png"
                alt="ts"
              />
              <img
                className="w-8 h-8 rounded-xl"
                src="https://res.cloudinary.com/dgnco8bh4/image/upload/ar_1:1,b_rgb:262c35,c_fill,g_auto,r_max,w_1000/v1684918207/NextJS-Logo_fost0b.png"
                alt="NextJS"
              />
            </div>
            <p className="uppercase py-3 text-gray-500">Personal</p>

            <ul className="list-disc space-y-3 ml-5 text-lg">
              <li>TypeScript practice</li>
              <li>NextjJS practice</li>
            </ul>
          </div>
        </article> */}
      </div>
    </motion.div>
  );
}
