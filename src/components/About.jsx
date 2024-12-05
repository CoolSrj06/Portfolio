import React, { useEffect } from "react";
import { ImDownload2 } from "react-icons/im";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="pt-16" id="about">
      <div>
        <h1
          className="inline border-b-2 border-[#C8CACD] font-bold text-lg md:text-xl mt-3 ml-14 md:ml-20"
          data-aos="fade-up"
        >
          About
        </h1>
        <div
          className="flex-col md:flex md:flex-row items-center md:justify-between mx-14 md:mx-20 py-6"
          data-aos="zoom-in"
        >
          <p className="w-full md:w-[50%]" data-aos="zoom-in-right">
            I'm a full-stack developer who links front-end and back-end
            technologies to make high-performance web applications. I'm skilled
            at creating user-friendly interfaces, improving server-side
            solutions, and integrating databases. I pay close attention to
            details and love finding innovative solutions for each project. I'm
            open to connecting, working, and collaborating on exciting projects
            with others.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-aos="zoom-in-left"
          >
            <a
              href="https://drive.google.com/file/d/13OanZeHDr5AiY4BNc4Wm608gZ1HJIFj6/view?usp=drive_link"
              className="flex mt-5 md:mt-0 text-base items-center space-x-2 bg-[#3366CC] ease-in-out duration-700 hover:bg-[#819096] text-white py-6 px-4 md:px-10 h-10 rounded shadow-md"
            >
              <p>View Resume </p>
              <ImDownload2 className="animate-bounce" />
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
