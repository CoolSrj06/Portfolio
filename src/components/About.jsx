import React, { useEffect } from "react";
import { ImDownload2 } from "react-icons/im";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

// Import social icons
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";

// Define your social links data
const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/CoolSrj06",
    aos: "zoom-in-up", // Changed AOS for variety
    aosDelay: "100",
    ariaLabel: "Srijan Maurya on GitHub",
    hoverColor: "hover:border-purple-500", // For Framer Motion border color change
    iconColor: "text-purple-400",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "https://x.com/CoolSrj06",
    aos: "zoom-in-up",
    aosDelay: "200",
    ariaLabel: "Srijan Maurya on Twitter / X",
    hoverColor: "hover:border-sky-500",
    iconColor: "text-sky-400",
  },
  {
    name: "Email",
    icon: MdOutlineMailOutline,
    href: "mailto:srijanmaurya6602@gmail.com",
    aos: "zoom-in-up",
    aosDelay: "300",
    ariaLabel: "Email Srijan Maurya",
    hoverColor: "hover:border-red-500",
    iconColor: "text-red-400",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/srijan-maurya100258/",
    aos: "zoom-in-up",
    aosDelay: "400",
    ariaLabel: "Srijan Maurya on LinkedIn",
    hoverColor: "hover:border-blue-600",
    iconColor: "text-blue-500",
  },
];

// CSS for border animation (optional, Framer Motion can also handle border animation)
const iconButtonStyles = `
  @keyframes pulse-border-social {
    0% {
      box-shadow: 0 0 0 0px rgba(var(--social-icon-color-rgb), 0.7);
    }
    50% {
      box-shadow: 0 0 0 6px rgba(var(--social-icon-color-rgb), 0.3);
    }
    100% {
      box-shadow: 0 0 0 0px rgba(var(--social-icon-color-rgb), 0.7);
    }
  }

  .social-icon-button:hover {
    /* Example: Using a CSS variable for the pulsing color, can be set via style prop */
    /* animation: pulse-border-social 1.5s infinite; */
    /* Or use Framer Motion for border animation directly */
  }
`;

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    // Inject custom styles for icon buttons if using CSS keyframe animation
    // const styleSheet = document.createElement("style");
    // styleSheet.innerText = iconButtonStyles;
    // document.head.appendChild(styleSheet);

    // return () => {
    //   if (document.head.contains(styleSheet)) {
    //     document.head.removeChild(styleSheet);
    //   }
    // };
  }, []);

  return (
    <section
      className="py-16 md:py-24 bg-slate-900 text-slate-100"
      id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative pb-2">
            About Me
            <span className="block h-1 w-1/5 bg-gradient-to-r from-amber-400 to-orange-500 mt-2 mx-auto"></span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start md:justify-between gap-10 md:gap-12 lg:gap-16">
          {/* Text Content and Resume Button Block (Left) */}
          <div
            className="w-full md:w-3/5 lg:w-2/3 order-1"
            data-aos="fade-right"
            data-aos-delay="100">
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
                I'm a full-stack developer passionate about
                crafting high-performance web applications
                by bridging front-end and back-end
                technologies. I excel in creating
                user-friendly interfaces, optimizing
                server-side solutions, and seamlessly
                integrating databases.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
                With a keen eye for detail and a love for
                innovative problem-solving, I approach each
                project with dedication. I'm always open to
                connecting, collaborating on exciting
                projects, and learning with fellow
                developers.
              </p>
            </div>
            <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
              <motion.a
                href="https://coolsrj06.github.io/Resume/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-400"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow:
                    "0px 10px 20px rgba(245, 158, 11, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}>
                <span>View Resume</span>
                <ImDownload2 className="text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Social Links Block (Right) */}
          <div className="w-full md:w-2/5 lg:w-1/3 order-2 mt-10 md:mt-0 flex flex-col items-center md:items-start">
            <h3
              className="text-xl md:text-2xl font-semibold text-white mb-8 text-center"
              data-aos="fade-left">
              Connect with Me
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-slate-800 rounded-full border-2 border-slate-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${social.hoverColor.replace(
                    "hover:",
                    "focus:"
                  )}`}
                  data-aos={social.aos}
                  data-aos-delay={social.aosDelay}
                  whileHover={{
                    scale: 1.1,
                    borderColor: social.hoverColor.split(
                      "-"
                    )[1]
                      ? `var(--color-${
                          social.hoverColor.split("-")[1]
                        }-${
                          social.hoverColor.split("-")[2]
                        })`
                      : social.hoverColor, // Dynamically get color for framer motion
                    boxShadow: `0 0 15px rgba(${
                      social.iconColor.startsWith("text-")
                        ? getRgbFromTextColor(
                            social.iconColor
                          )
                        : "100,100,100"
                    }, 0.5)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                  aria-label={social.ariaLabel}
                  // For CSS pulse animation, you might set a CSS variable here
                  // style={{ '--social-icon-color-rgb': getRgbFromTextColor(social.iconColor) }}
                >
                  <social.icon
                    className={`text-2xl md:text-3xl ${social.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  />
                  {/* Tooltip-like text on hover */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto min-w-max whitespace-nowrap px-3 py-1.5 text-sm text-white bg-slate-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to convert Tailwind text color to RGB values (simplified)
// This is a very basic converter and might need to be more robust for all Tailwind colors
const getRgbFromTextColor = (textColorClass) => {
  // Example: 'text-purple-400' -> 'purple-400'
  const colorNameAndShade = textColorClass.replace(
    "text-",
    ""
  );
  // This is where you'd typically have a mapping from Tailwind color names to RGB
  // For simplicity, I'll hardcode a few common ones or return a default
  const colorMap = {
    "purple-400": "160, 100, 220", // Approx
    "sky-400": "50, 180, 240", // Approx
    "red-400": "240, 100, 100", // Approx
    "blue-500": "60, 130, 240", // Approx
    // Add more as needed
  };
  return colorMap[colorNameAndShade] || "128, 128, 128"; // Default gray
};
