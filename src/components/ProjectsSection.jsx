import React, { useEffect, useState } from "react";
import { PersonalProjects } from "./personalProjects";
import { WorkExperience } from "./WorkExperience";
import Aos from "aos";
import "aos/dist/aos.css";

export const ProjectsSection = () => {
  const [activeSection, setActiveSection] = useState("experience");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="pt-24" id="works">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-4 mb-8">
            <button
              className={`border-2 py-2 px-5 font-bold text-lg md:text-xl transition-all ${
                activeSection === "experience"
                  ? "border-[#C8CACD] bg-[#C8CACD] text-slate-900"
                  : "border-[#C8CACD]"
              }`}
              onClick={() => setActiveSection("experience")}
              data-aos="fade-up"
            >
              Work Experience
            </button>
            <button
              className={`border-2 py-2 px-5 font-bold text-lg md:text-xl transition-all ${
                activeSection === "projects"
                  ? "border-[#C8CACD] bg-[#C8CACD] text-slate-900"
                  : "border-[#C8CACD]"
              }`}
              onClick={() => setActiveSection("projects")}
              data-aos="fade-up"
            >
              Projects
            </button>
          </div>
        </div>
        
        {activeSection === "projects" ? <PersonalProjects /> : <WorkExperience />}
      </div>
    </section>
  );
};