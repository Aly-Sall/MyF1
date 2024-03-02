import { Link } from "react-router-dom";
import React from "react";
import hero from "../Header/Hero-section.jpg";
import { motion } from "framer-motion";
import Feature from "./Feature";
import Topics from "./Topics";

const Header: React.FC = () => {
  return (
    <>
      <div className="relative h-screen ">
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-opacity-5 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <img
          src={hero}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        ></img>
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black font-bold">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-2xl sm:text-xs md:text-xl lg:text-6xl xl:text-6xl font-bold text-white"
          >
            Explore the speed of F1!
          </motion.h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-5 mt-5">
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
        <div className="border border-gray-400"></div>
      </div>

      <div className="text-white relative">
        <img
          alt="F1"
          className="w-full h-full object-cover"
          height="800"
          src="https://pbs.twimg.com/media/GGZyw6gWEAArY5J?format=jpg&name=4096x4096"
          style={{
            aspectRatio: "1647/497",
            objectFit: "cover",
          }}
          width="1647"
          loading="lazy"
        />
        <Link to="/Liveries">
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center p-8 md:p-4 lg:p-8 md:text-xs">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 first-letter:text-5xl">
              Liveries 2024
            </h1>
          </div>
        </Link>
      </div>

      <Feature />
      <Topics />
    </>
  );
};

export default Header;
