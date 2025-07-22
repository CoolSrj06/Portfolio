import React, { useEffect } from "react"; // Assuming you might use useEffect for AOS
import DataverseInsights from "../assets/DataverseInsights.gif";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Assuming react-router-dom for external links
import AOS from "aos"; // Make sure AOS is initialized if you use its attributes
import "aos/dist/aos.css";
import dataverse_video from "../assets/DataverseInsights - Made with Clipchamp (2).mp4";

// If you don't have a global AOS init, you can do it here or in your App.js
// useEffect(() => {
//   AOS.init({ duration: 1000, once: true });
// }, []);

// Dummy data structure if you plan to add more experiences
const experiences = [
  {
    id: 1,
    company: "Dataverse Insights",
    role: "Full Stack Developer Intern",
    image: DataverseInsights,
    website: "https://dataverseinsights.com/",
    websiteDisplay: "dataverseinsights.com",
    descriptionPoints: [
      "Designed APIs to integrate PayPal payment gateway, and created a dynamic and intuitive user interface for the same with React.",
      "Developed multiple APIs to handle 20,000 user records in the admin panel and manage 2,000 monthly active users efficiently.",
      "Managed website production environments and updates on Hostinger VPS using Ubuntu Linux.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "MongoDB",
      "NodeJs",
      "ExpressJs",
      "Ubuntu",
      "Hostinger VPS",
    ],
    type: "Freelance",
    aosDelay: "0", // Base delay for the first card
  },
  // Add more experience objects here
];

export const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animation
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section
      className="py-6 md:py-10 text-slate-100"
      id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d9d9d9]">
            Work Experience
            <span className="block h-1 w-1/3 bg-gradient-to-r from-sky-400 to-indigo-500 mt-2 mx-auto"></span>
          </h2>
          {/* You can add a general subtitle for the section if needed */}
          <p className="text-slate-300 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            My professional journey and contributions.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 mb-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className=" rounded-xl border-2 border-black/20 shadow-[2px_2px_20px_black]/20 overflow-hidden transform transition-all duration-300 "
              data-aos="fade-up"
              data-aos-delay={exp.aosDelay}>
              <div className="md:flex">
                <div className="md:w-1/2 lg:w-6/12 flex-shrink-0">
                  <video
                    autoPlay
                    muted
                    loop
                    className="object-cover mt-13">
                    <source
                      src={dataverse_video}
                      type="video/mp4"
                    />
                    Your browser does not support the video
                    tag.
                  </video>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 lg:w-7/12 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-sm text-cyan-600 font-semibold uppercase tracking-wider mb-1">
                    {exp.type}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#d9d9d9] mb-1.5">
                    {exp.company}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-300 italic mb-6">
                    {exp.role}
                  </p>

                  <ul className="space-y-3 mb-6 list-disc text-slate-300">
                    {exp.descriptionPoints.map(
                      (point, index) => (
                        <li
                          key={index}
                          className="flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1 text-lg">
                            &#8227;
                          </span>{" "}
                          {/* Custom bullet */}
                          <span>{point}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="mb-2">
                    <p className="text-sm font-semibold text-slate-400 mb-2">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-slate-600 transition-colors cursor-default">
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-end space-x-4">
                    <Link
                      to={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-sky-400 transition-colors">
                      {exp.websiteDisplay}
                    </Link>                   
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
