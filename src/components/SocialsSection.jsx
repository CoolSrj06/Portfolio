import React, { useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import "aos/dist/aos.css";
import Aos from "aos";

export const SocialsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1100, easing: 'ease-in-sine' });
  });

  return (
    <section className="mt-20 py-4" data-aos='fade-up' id='social'>
      <h2 className="text-base md:text-lg ml-14 md:ml-20 font-semibold">Connect with me on:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 md:gap-x-20 gap-y-2 md:gap-y-0 px-14 md:px-20">
        <a href='https://github.com/CoolSrj06' target="_blank" className="socials-card" data-aos="fade-right">
          <SiGithub className="socials-icon" />
          <p>GitHub</p>
        </a>
        <a href='https://x.com/CoolSrj06' target="_blank" className="socials-card" data-aos="fade-right">
          <FaXTwitter className="socials-icon"/>
          <p>Twitter</p>
        </a>
        <a href='mailto:srijanmaurya6602@gamil.com' target="_blank" className="socials-card" data-aos="zoom-in">
          <MdOutlineMailOutline className="socials-icon"/>
          <p>Email</p>
        </a>
        <a href='https://www.linkedin.com/in/srijan-maurya100258/' target="_blank" className="socials-card" data-aos="zoom-in">
          <FiLinkedin className="socials-icon"/>
          <p>Linkedin</p>
        </a>
      </div>
    </section>
  );
};
