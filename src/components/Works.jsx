import React, { useEffect } from "react";
import UnitStorage from "../assets/UnitStorage.png";
import CodeWhispers from "../assets/CodeWhispers.png";
import BasicChatApp from "../assets/Basic Chat Application.png";
import { FaGithub, FaLink } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import YouTubeTimeCalculator from "../assets/YoutubeTimeCalculator.png";

export const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="pt-24" id="works">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1
            className="border-2 border-[#C8CACD] py-2 px-5 font-bold text-lg md:text-xl"
            data-aos="fade-up"
          >
            Works
          </h1>
          <p className="mt-2 text-base md:text-lg" data-aos="fade-up">
            These are some of my works👇🏻
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-14 gap-y-10 mx-14 md:mx-16 py-10 text-[#0C0C0C]">
            <div className="works-container " data-aos="fade-up">
              <img
                src={CodeWhispers}
                alt="CodeWhisper-img"
                className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
              />
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-1 px-2">
                  Code-Whispers
                </h1>
                <p className="mb-3 px-2 text-sm md:text-base">
                  A Full-stack project aims to solve doubts of learners and developers on any topic,
                  where the users present on the platform help them to solve their doubts, 
                  thus creating a helpful environment for everyone. 
                  Moreover, it provides a common platform linking different websites 
                  and providing them with software links and various languages books links.
                </p>
                <span className="flex flex-wrap gap-2 px-2">
                  <p className="works-pill">HTML</p>
                  <p className="works-pill">CSS</p>
                  <p className="works-pill">JavaScript</p>
                  <p className="works-pill">MongoDB</p>
                  <p className="works-pill">NodeJs</p>
                </span>
              </div>
              <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
                <Link to="https://github.com/CoolSrj06/code-whispers.git">
                  <FaGithub className="text-lg" />
                </Link>
                <Link to="https://code-whispers.onrender.com/api/v2/url/">
                  <FaLink className="text-lg" />
                </Link>
              </span>
            </div>
            <div className="works-container" data-aos="fade-up">
              <img
                src={UnitStorage}
                alt="UnitStorage-img"
                className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
              />
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-1 px-2">
                  Uni-Storage
                </h1>
                <p className="mb-3 px-2 text-sm md:text-base">
                  UniStorage is a comprehensive student property management system.
                  This project aims to streamline the management, tracking, and allocation of 
                  student-owned properties such as mattresses, blankets, buckets, and other 
                  essential items within a campus or student housing environment. 
                  The system is designed to be user-friendly, efficient, and scalable, 
                  catering to the needs of both students and administrators.
                </p>
                <span className="flex flex-wrap gap-2 px-2">
                  <p className="works-pill">React.Js</p>
                  <p className="works-pill">NodeJs</p>
                  <p className="works-pill">MongoDB</p>
                </span>
              </div>
              <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
                <Link to="https://github.com/AnishMane/UniStorage.git">
                  <FaGithub className="text-lg" />
                </Link>
              </span>
            </div>
            <div className="works-container" data-aos="fade-up">
              <img
                src={YouTubeTimeCalculator}
                alt="CodeWhisper-img"
                className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
              />
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-1 px-2">
                  Youtube Time Calculator Extension
                </h1>
                <p className="mb-3 px-2 text-sm md:text-base">
                  This extension calculates when will your current playing YouTube will end in real time.
                  It tells the precise time of when the video will end not matter at which playback speed the video is played.
                </p>
                <span className="flex flex-wrap gap-2 px-2">
                  <p className="works-pill">HTML</p>
                  <p className="works-pill">CSS</p>
                  <p className="works-pill">JavaScript</p>
                </span>
              </div>
              <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
                <Link to="https://github.com/CoolSrj06/YouTube-Time-Calculator-Extension.git">
                  <FaGithub className="text-lg" />
                </Link>
              </span>
            </div>
            <div className="works-container" data-aos="fade-up">
              <img
                src={BasicChatApp}
                alt="BasicChatApp-img"
                className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
              />
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-1 px-2">
                  Simple Chat Application
                </h1>
                <p className="mb-3 px-2 text-sm md:text-base">
                  This is a simple chat application that operates on websockets. It is a 
                  global platform that allows you to interact with others while anonmous.
                </p>
                <span className="flex flex-wrap gap-2 px-2">
                  <p className="works-pill">HTML</p>
                  <p className="works-pill">CSS</p>
                  <p className="works-pill">Javascript</p>
                  <p className="works-pill">Node.js</p>
                  <p className="works-pill">Express.js</p>
                  <p className="works-pill">Websockets</p>
                  <p className="works-pill">SQLite</p>
                </span>
              </div>
              <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
                <Link to="https://github.com/CoolSrj06/Basic-Chat-Application.git">
                  <FaGithub className="text-lg" />
                </Link>
                <Link to="https://basic-chat-application-6728.onrender.com">
                  <FaLink className="text-lg" />
                </Link>
              </span>
            </div>
          </div>
        </div>
    </section>
  );
};




/**
 * Sample

  <div className="works-container" data-aos="fade-down">
            <img
              src={TaskManagementApp}
              alt="weatherapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">
                TASK APP
              </h1>
              <p className="text-gray-800 mb-3 px-2 text-sm md:text-base">
                This is a web app which allows users to create, edit and delete
                tasks.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React.Js</p>
                <p className="works-pill">TailwindCSS</p>
                <p className="works-pill">EXPRESS.JS</p>
                <p className="works-pill">MONGO DB</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
              <Link to="https://github.com/favourAyomikun/TaskManagementApp-Client">
                <FaGithub className="text-lg" />
              </Link>
              <Link to="https://task-m-a.vercel.app/">
                <FaLink className="text-lg" />
              </Link>
            </span>
          </div>
 */
