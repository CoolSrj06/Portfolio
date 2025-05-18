import React, { useEffect } from "react";
import UnitStorage from "../assets/UnitStorage.png";
import CodeWhispers from "../assets/CodeWhispers.png";
import BasicChatApp from "../assets/Basic Chat Application.png";
import YouTubeTimeCalculator from "../assets/YoutubeTimeCalculator.png";
import { FaGithub, FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Data array for personal projects
const projectsData = [
  {
    id: "codewhispers",
    image: CodeWhispers,
    title: "Code-Whispers",
    description:
      "A Full-stack project aims to solve doubts of learners and developers on any topic, where the users present on the platform help them to solve their doubts, thus creating a helpful environment for everyone. Moreover, it provides a common platform linking different websites and providing them with software links and various languages books links.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "NodeJs",
    ],
    githubLink:
      "https://github.com/CoolSrj06/code-whispers.git",
    liveLink:
      "https://code-whispers.onrender.com/api/v2/url/",
    aosDelay: "0",
  },
  {
    id: "unistorage",
    image: UnitStorage,
    title: "Uni-Storage",
    description:
      "UniStorage is a comprehensive student property management system. This project aims to streamline the management, tracking, and allocation of student-owned properties such as mattresses, blankets, buckets, and other essential items within a campus or student housing environment. The system is designed to be user-friendly, efficient, and scalable, catering to the needs of both students and administrators.",
    technologies: ["React.Js", "NodeJs", "MongoDB"],
    githubLink:
      "https://github.com/AnishMane/UniStorage.git",
    liveLink: null, // Or a specific link if available
    aosDelay: "100",
  },
  {
    id: "youtubetimecalculator",
    image: YouTubeTimeCalculator,
    title: "Youtube Time Calculator Extension",
    description:
      "This extension calculates when will your current playing YouTube will end in real time. It tells the precise time of when the video will end not matter at which playback speed the video is played.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/CoolSrj06/YouTube-Time-Calculator-Extension.git",
    liveLink: null, // Or a specific link if available
    aosDelay: "200",
  },
  {
    id: "basicchatapp",
    image: BasicChatApp,
    title: "Simple Chat Application",
    description:
      "This is a simple chat application that operates on websockets. It is a global platform that allows you to interact with others while anonmous.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Express.js",
      "Websockets",
      "SQLite",
    ],
    githubLink:
      "https://github.com/CoolSrj06/Basic-Chat-Application.git",
    liveLink:
      "https://basic-chat-application-6728.onrender.com",
    aosDelay: "300",
  },
  // Add more project objects here following the same structure
];

// Reusable Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-sky-500/30 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={project.aosDelay}>
      <div className="relative w-full h-52 flex-shrink-0">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover" // Use object-cover, or object-contain if aspect ratio is an issue
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-slate-300 text-sm md:text-base mb-4 leading-relaxed flex-grow">
          {project.description.length > 150 // Truncate long descriptions
            ? `${project.description.substring(0, 150)}...`
            : project.description}
        </p>

        <div className="mb-5">
          <p className="text-xs font-semibold text-slate-400 mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-700 text-slate-200 text-xs font-medium px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-end space-x-4">
          {project.githubLink && (
            <Link
              to={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label={`${project.title} GitHub repository`}>
              <FaGithub className="text-2xl" />
            </Link>
          )}
          {project.liveLink && (
            <Link
              to={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label={`${project.title} live demo`}>
              <FaLink className="text-2xl" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const PersonalProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="py-16 md:py-24" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative pb-2">
            Personal Projects
            <span className="block h-1 w-1/3 bg-gradient-to-r from-sky-400 to-indigo-500 mt-2 mx-auto"></span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            These are some of the projects I've built to
            explore new technologies and solve interesting
            problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
