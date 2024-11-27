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
import "aos/dist/aos.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="pt-24" data-aos="fade-up" id="skills">
      <div className="mt-3 ml-14 md:ml-20">
        <h1 className="font-bold text-lg md:text-xl inline border-b-2 border-[C8CACD]">
          Skills
        </h1>
        <p className="text-base md:text-lg mt-2">Technologies I currently work with:</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 py-8 mx-14 md:mx-20">
        <div className="skills-container" data-aos="flip-right">
          <img src={Html} alt="html-img" className="h-12 md:h-20" />
          <p className="skills-text">HTML</p>
        </div>
        <div className="skills-container" data-aos="flip-left">
          <img src={Css} alt="css-img" className="h-12 md:h-20" />
          <p className="skills-text">CSS</p>
        </div>
        <div className="skills-container" data-aos="zoom-in-up">
          <img src={Javascript} alt="js-img" className="h-12 md:h-20" />
          <p className="skills-text">JAVASCRIPT</p>
        </div>
        <div className="skills-container" data-aos="fade-down">
          <img src={GitHub} alt="github-img" className="h-12 md:h-20" />
          <p className="skills-text">GITHUB</p>
        </div>
        <div className="skills-container" data-aos="fade-up-right">
          <img src={NodeJs} alt="nodejs-img" className="h-12 md:h-20" />
          <p className="skills-text">NODE JS</p>
        </div>
        <div className="skills-container" data-aos="fade-up-right">
          <img src={ExpressJs} alt="expressjs-img" className="h-12 md:h-20" />
          <p className="skills-text">EXPRESS JS</p>
        </div>
        <div className="skills-container" data-aos="zoom-out-down">
          <img src={MongoDB} alt="mongodb-img" className="h-12 md:h-20" />
          <p className="skills-text">MONGODB</p>
        </div>
        <div className="skills-container" data-aos="zoom-in">
          <img src={ReactJs} alt="reactjs-img" className="h-12 md:h-20 animate-spin" />
          <p className="skills-text">REACT JS</p>
        </div>
      </div>
    </section>
  );
};
