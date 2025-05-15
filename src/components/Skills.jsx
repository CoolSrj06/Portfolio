import React, { useEffect } from "react";
import Css from "../assets/css.png";
import GitHub from "../assets/github.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import NodeJs from "../assets/node.png";
import ReactJs from "../assets/react.png";
import ExpressJs from "../assets/expressjs.png";
import AOS from "aos";
import Linux from "../assets/Linux.gif";
import Hostinger from "../assets/Hostinger.png";
import "aos/dist/aos.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillsData = [
    { img: Html, name: "HTML" },
    { img: Css, name: "CSS" },
    { img: Javascript, name: "JAVASCRIPT" },
    { img: GitHub, name: "GITHUB" },
    { img: NodeJs, name: "NODE JS" },
    { img: ExpressJs, name: "EXPRESS JS" },
    { img: MongoDB, name: "MONGODB" },
    { img: ReactJs, name: "REACT JS" },
    { img: Linux, name: "Linux" },
    { img: Hostinger, name: "Hostinger VPS" },
  ];

  return (
    <section className="pt-24" id="skills">
      <div className="mt-3 ml-14 md:ml-20">
        <h1 className="font-bold text-lg md:text-xl inline border-b-2 border-[C8CACD]">
          Skills
        </h1>
        <p className="text-base md:text-lg mt-2">Technologies I currently work with:</p>
      </div>
      
      <div className="relative overflow-hidden py-10 bg-cyan-950 mt-8 mx-6 md:mx-20 rounded-lg ">
        <div className="inline-flex animate-scroll">
          {[...skillsData, ...skillsData].map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-8">
              <img
                src={skill.img}
                alt={`${skill.name}-img`}
                className="h-16 md:h-24 object-contain hover:scale-110 transition-transform duration-300"
              />
              <p className="text-sm md:text-base mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};