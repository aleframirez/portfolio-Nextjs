import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 
    w-[300px] md:w-[400px] xl:w-[470px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        <h4 className="text-3xl font-light">Puesto</h4>
        <p className="font-bold text-xl mt-1">Empresa</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-8 h-8"
            src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"
            alt="js"
          />
          <img
            className="w-8 h-8"
            src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"
            alt="js"
          />
          <img
            className="w-8 h-8"
            src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"
            alt="js"
          />
          <img
            className="w-8 h-8"
            src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"
            alt="js"
          />
        </div>
        <p className="uppercase py-3 text-gray-500">Desde - Hasta</p>

        <ul className="list-disc space-y-3 ml-5 text-lg">
          <li>Summary Points...</li>
          <li>Summary Points...</li>
          <li>Summary Points...</li>
          <li>Summary Points...</li>
        </ul>
      </div>
    </article>
  );
}
