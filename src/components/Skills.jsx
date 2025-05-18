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

// Define proficiency levels (example, adjust as needed)
const proficiencyLevels = {
  BASIC: { percentage: 40, label: "Basic" },
  INTERMEDIATE: { percentage: 65, label: "Intermediate" },
  ADVANCED: { percentage: 85, label: "Advanced" },
  EXPERT: { percentage: 95, label: "Expert" },
};

const skillsData = [
  {
    img: Html,
    name: "HTML",
    level: proficiencyLevels.ADVANCED.percentage,
    color: "bg-orange-500",
    category: "Frontend",
  },
  {
    img: Css,
    name: "CSS",
    level: proficiencyLevels.ADVANCED.percentage,
    color: "bg-blue-500",
    category: "Frontend",
  },
  {
    img: Javascript,
    name: "JavaScript",
    level: proficiencyLevels.EXPERT.percentage,
    color: "bg-yellow-400",
    category: "Frontend/Backend",
  },
  {
    img: ReactJs,
    name: "React JS",
    level: proficiencyLevels.INTERMEDIATE.percentage,
    color: "bg-sky-500",
    category: "Frontend",
  },
  {
    img: NodeJs,
    name: "Node JS",
    level: proficiencyLevels.EXPERT.percentage,
    color: "bg-green-500",
    category: "Backend",
  },
  {
    img: ExpressJs,
    name: "Express JS",
    level: proficiencyLevels.EXPERT.percentage,
    color: "bg-gray-400", // Changed from bg-gray-400 for better visibility on dark bg
    category: "Backend",
  },
  {
    img: MongoDB,
    name: "MongoDB",
    level: proficiencyLevels.EXPERT.percentage,
    color: "bg-green-700",
    category: "Database",
  },
  {
    img: GitHub,
    name: "GitHub",
    level: proficiencyLevels.EXPERT.percentage,
    color: "bg-neutral-400", // Changed from bg-neutral-500 for better visibility
    category: "Tools",
  },
  {
    img: Linux,
    name: "Linux",
    level: proficiencyLevels.ADVANCED.percentage,
    color: "bg-purple-500",
    category: "Tools/OS",
  },
  {
    img: Hostinger,
    name: "Hostinger VPS",
    level: proficiencyLevels.ADVANCED.percentage,
    color: "bg-indigo-500",
    category: "Tools/Hosting",
  },
  // Add more skills here to ensure the marquee has enough content
];

// SkillCard Component - Remains the same as your provided version
const SkillCard = ({
  img,
  name,
  level,
  color,
  // aosDelay is not directly used in marquee item but kept for potential future use
}) => {
  // Find the label for the proficiency level
  let proficiencyLabel = proficiencyLevels.BASIC.label; // Default to basic
  const foundLevelKey = Object.keys(proficiencyLevels).find(
    (key) => proficiencyLevels[key].percentage === level
  );
  if (foundLevelKey) {
    proficiencyLabel =
      proficiencyLevels[foundLevelKey].label;
  } else {
    // If exact match not found, find the closest lower bound or default
    const sortedLevels = Object.entries(
      proficiencyLevels
    ).sort(([, a], [, b]) => b.percentage - a.percentage);
    for (const [, pLevel] of sortedLevels) {
      if (level >= pLevel.percentage) {
        proficiencyLabel = pLevel.label;
        break;
      }
    }
  }

  return (
    <div
      className="bg-slate-800 p-6 rounded-xl shadow-xl flex flex-col items-center text-center mx-4 flex-shrink-0 w-50 md:w-64 h-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
      // data-aos="fade-up" // AOS might conflict with marquee, can be removed for items
      // data-aos-delay={aosDelay}
    >
      <img
        src={img}
        alt={`${name} icon`}
        className="h-16 md:h-20 object-contain mb-4"
      />
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {name}
      </h3>
      <div className="w-full bg-slate-700 rounded-full h-1 mb-1 overflow-hidden">
        {" "}
        {/* Adjusted height */}
        <div
          className={`${color} h-full rounded-full`} // Removed transition for marquee
          style={{ width: `${level}%` }}
          // data-aos="slide-right" // AOS on bar might conflict
          // data-aos-duration="1200"
          // data-aos-once="true"
        ></div>
      </div>
      <p className="text-xs md:text-sm text-slate-400 mt-1">
        {" "}
        {/* Added mt-1 for spacing */}
        {proficiencyLabel}
      </p>
    </div>
  );
};

// CSS for the marquee effect
const marqueeStyles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-500%); /* Scrolls one full width of the duplicated content */
    }
  }

  .animate-marquee {
    animation: scroll 60s linear infinite; /* Adjust 40s to control speed */
  }

  @media (max-width: 768px) {
    .animate-marquee {
      animation: scroll 20s linear infinite; /* Slower speed for mobile */
    }
}

  .marquee-container {
    position: relative; /* Needed for absolute positioning of pseudo-elements */
    /* width: 100%; // Already applied by Tailwind's w-full */
    /* overflow: hidden; // Already applied by Tailwind */
  }


  /* Fade-out effect on left and right edges */
  .marquee-container::before,
  .marquee-container::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px; /* Width of the fade effect, adjust as needed */
    z-index: 2; /* Ensure it's above the scrolling cards */
    pointer-events: none; /* Allows clicks to pass through to cards if necessary */
  }

  .marquee-container::before {
    left: 0;
    background: linear-gradient(to right, #0f172b 0%, #0f172b 20%, transparent 100%); /* Match bg-slate-900 */
  }

  .marquee-container::after {
    right: 0;
    background: linear-gradient(to left, #0f172b 0%, #0f172b 20%, transparent 100%); /* Match bg-slate-900 */
  }

  /* Pause animation on hover */
  .marquee-container:hover .animate-marquee {
    animation-play-state: paused;
  }
`;

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    // Inject marquee styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = marqueeStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Duplicate skills for a smoother infinite scroll effect
  const duplicatedSkills = [
    ...skillsData,
    ...skillsData,
    ...skillsData,
  ];
  // For a very long marquee, you might even do [...skillsData, ...skillsData, ...skillsData]

  return (
    <section
      className="py-16 md:py-24 bg-slate-900"
      id="skills">
      <div className="max-w-[90%] mx-auto px-0 md:px-12">
        {" "}
        {/* px-0 on mobile to allow full width marquee */}
        <div className="text-center mb-12 md:mb-16 px-6 md:px-0">
          {" "}
          {/* Added padding here for heading */}
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-bold text-white relative pb-2">
            Skills
            <span className="block h-1 w-1/8 bg-gradient-to-r from-purple-400 to-purple-800 mt-2 mx-auto"></span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-slate-300 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Here's a showcase of the primary technologies
            and tools I work with, highlighting my current
            proficiency.
          </p>
        </div>
        {/* Marquee Container */}
        <div className="marquee-container w-full overflow-hidden py-8">
          {" "}
          {/* Added py-8 for spacing */}
          <div className="flex animate-marquee">
            {duplicatedSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`} // Ensure unique keys
                img={skill.img}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
