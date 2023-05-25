import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

// Nota para mi yo del futuro: Mejorar este copy paste que se repite

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {/* Proyecto de HenryFilms */}
        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4
               items-center justify-center p-20 md:p-32 h-screen"
        >
          <Link className="pt-20 w-auto h-full cursor-pointer" href="https://henry-film.vercel.app/">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-auto h-full"
              src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684871555/HenryFilms_r3fa3b.png"
              alt=""
            />
          </Link>
          <div className="space-y-2 px-0 md:px-5 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Project 1 of 6:
              </span>{" "}
              HenryFilms
            </h4>
            <p className="text-sm text-center md:text-left">
              The project is an application that allows users to view TV series
              and movies with detailed information for each item when clicked
              on. It includes an authentication system with login, register, and
              login with Google functionality. The application supports user
              roles of "user" and "admin". Users can make purchases, edit their
              profile, and add items to their favorites list. The admin panel
              provides options for creating, editing, and deleting products, as
              well as managing registered users. In summary, this project is an
              application that offers a viewing experience for TV series and
              movies, with features such as authentication, user roles,
              purchasing options, and content management.
            </p>
          </div>
        </div>

        {/* Proyecto de RestServer */}
        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
               items-center justify-center p-20 md:p-32 h-screen"
        >
          <Link className="pt-20 w-auto h-full cursor-pointer" href="https://documenter.getpostman.com/view/21338824/2s93m4Y3T4/">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-auto h-full"
              src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684883082/NodeJS-RestServer-Documentation_dvato4.png"
              alt=""
            />
          </Link>
          <div className="space-y-1 px-0 md:px-5 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Project 2 of 6:
              </span>{" "}
              NodeJS RestServer
            </h4>
            <p className="text-sm text-center md:text-left">
              The RestServer described is a server-side application that
              provides routes for creating, updating, obtaining, and deleting
              Users, Categories, and Products. These routes are equipped with
              appropriate validations to ensure data integrity. The server also
              incorporates a search system by ID for the three models: User,
              Category, and Product. Moreover, the RestServer integrates Google
              Identity functionality, enabling users to log in using their
              Google accounts. It utilizes the cloudinary service to store
              images of both users and products in the cloud, ensuring efficient
              image management. Additionally, version 1.8.0 of the server
              introduces nodemailer implementation. This integration allows the
              server to send emails, expanding its capabilities beyond CRUD
              operations. Overall, the RestServer combines user authentication,
              data manipulation, image storage, and email functionality to
              provide a comprehensive server-side solution.
            </p>
          </div>
        </div>

        {/* Proyecto NodeJS - Aplicacion de consola (Clima) */}
        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
               items-center justify-center p-20 md:p-32 h-screen"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 w-auto h-full"
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684914750/NodeJS-Weather-Console-Application_iul3bm.png"
            alt=""
          />
          <div className="space-y-2 px-0 md:px-5 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Project 3 of 6:
              </span>{" "}
              NodeJS Weather Application
            </h4>
            <p className="text-sm text-center md:text-left">
              The project is a console application developed in Node.js that
              allows users to retrieve weather information by making API calls
              to a weather API. The application offers the following
              functionalities: searching for a city to obtain its current
              weather data and maintaining a search history. Users can enter the
              name of a city, and the application will make a request to the
              weather API to fetch the current weather information for that
              city. The retrieved data may include details such as temperature,
              location, and weather conditions. Additionally, the application
              keeps track of the search history, allowing users to review their
              previous search queries. This feature enables users to easily
              access weather information for previously searched cities without
              the need to re-enter the city name.
            </p>
          </div>
        </div>

        {/* Proyecto NodeJS - Aplicacion de consola (To-Do List) */}
        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
               items-center justify-center p-20 md:p-32 h-screen"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 w-auto h-full"
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684913303/NodeJS-ToDo-Console-Application_wbshms.png"
            alt=""
          />
          <div className="space-y-2 px-0 md:px-5 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Project 4 of 6:
              </span>{" "}
              NodeJS To-Do application
            </h4>
            <p className="text-sm text-center md:text-left">
              The project is a command-line application developed in Node.js
              that enables users to manage tasks. It offers several key
              features, including task creation, task listing, tracking
              completed and pending tasks, marking tasks as complete, and
              deleting tasks. To enhance task management, the application
              distinguishes between completed and pending tasks. Users can
              quickly filter and view only completed tasks or focus on pending
              tasks that still require attention. By marking a task as complete,
              it is visually differentiated from pending tasks, ensuring clarity
              and a sense of accomplishment. Furthermore, the application allows
              users to delete tasks when they are no longer relevant or
              necessary.
            </p>
          </div>
        </div>

        {/* Proyecto DogsHenry - PI Dogs */}
        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
               items-center justify-center p-20 md:p-32 h-screen"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 w-auto h-full"
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1684982712/cartoon-dog_jdd0wi.jpg"
            alt=""
          />
          <div className="space-y-2 px-0 md:px-5 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Project 5 of 6:
              </span>{" "}
              Dogs House
            </h4>
            <p className="text-sm text-center md:text-left">
              The individual project was developed during the SoyHenry bootcamp.
              It involves making API calls to retrieve dog breeds information.
              The project includes pagination and filtering features, along with
              a panel to add new dog breeds. The application allows users to
              fetch data about various dog breeds from an API. The fetched
              information typically includes details such as breed name,
              characteristics, temperament, and images.Additionally, the project
              includes a panel where users can contribute by adding new dog
              breeds to the system. This feature enables users to expand the
              breed database and share information about lesser-known or rare
              breeds.
            </p>
          </div>
        </div>

        {/* Proyecto NodeJS - Aplicacion de consola (To-Do List) */}
        <div
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
               items-center justify-center p-20 md:p-32 h-screen"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 w-auto h-full"
            src="https://res.cloudinary.com/dgnco8bh4/image/upload/v1683768022/zquu5x72jnqrwwxvnmec.png"
            alt=""
          />
          <div className="space-y-5 px-0 md:px-5 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Project 6 of 6:
              </span>{" "}
              Pokedex
            </h4>
            <p className="text-sm text-center md:text-left">
              The project aims to implement the knowledge acquired about
              Next.js. Currently, it includes API calls to retrieve information
              and images of Pokémon. Additionally, the project incorporates a
              "Add to Favorites" button. The application utilizes Next.js to
              create a dynamic and efficient front-end experience. It connects
              to the Pokémon API to fetch data such as Pokémon names, abilities,
              types, and images. This data is then displayed on the
              application's interface, providing users with detailed Pokémon
              information.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}
