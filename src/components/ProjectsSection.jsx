// ProjectsSection.js
import React, { useEffect, useState } from "react";
import { PersonalProjects } from "./personalProjects";
import { WorkExperience } from "./WorkExperience";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatedToggleButton } from "./animatedButton"; // Import the new component

export const ProjectsSection = () => {
  const [activeSection, setActiveSection] =
    useState("experience");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-16 md:pt-24 " id="works">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="flex flex-col justify-center items-center mb-10 md:mb-12"
          data-aos="fade-down">
          <div className="flex gap-3 md:gap-4 p-1">
            <AnimatedToggleButton
              text="Work Experience"
              hoverText="View Experience" // Or keep it the same: "Work Experience"
              onClick={() => setActiveSection("experience")}
              isActive={activeSection === "experience"}
            />
            <AnimatedToggleButton
              text="Personal Projects"
              hoverText="View Projects" // Or keep it the same: "Personal Projects"
              onClick={() => setActiveSection("projects")}
              isActive={activeSection === "projects"}
            />
          </div>
        </div>

        {activeSection === "experience" ? (
          <WorkExperience />
        ) : (
          <PersonalProjects />
        )}
      </div>
    </section>
  );
};
