import Aos from "aos";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
import animatedImage from "../assets/My Profile Photo.png"; // Make sure this path is correct

const morphStyles = `
  :root {
    --hero-bg: #001529; /* Adjusted for overall section background */
    --hero-primary: #88D5BF;
    --hero-secondary: #5D6BF8;
    --hero-third: #e27fcb;
  }

  .morph-shape-container {
    position: relative; /* For positioning the image inside */
    width: 18rem; /* Adjust base width as needed */
    height: 18rem; /* Adjust base height as needed */
    /* Centering the shape itself if its parent is a flex container */
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) { /* md breakpoint */
    .morph-shape-container {
      width: 30rem;
      height: 30rem;
    }
  }

  .morph-shape {
    background: linear-gradient(45deg, var(--hero-primary) 0%, var(--hero-secondary) 100%);
    animation: morph 8s linear infinite;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    height: 100%; /* Takes full height of its container */
    width: 100%; /* Takes full width of its container */
    transition: all 1s ease-in-out;
    position: relative; /* To allow z-indexing if needed and for pseudo-elements */
    overflow: hidden; /* Crucial to clip the image to the morphing shape */
  }

  .morph-shape img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 105%; /* Image takes most of the shape's space, adjust as needed */
    height: 105%;
    object-fit: cover;
    /* Potentially remove or reduce shadow from image if shape provides enough visual interest */
  }

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--hero-primary) 0%, var(--hero-secondary) 100%);
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
      background: linear-gradient(45deg, var(--hero-third) 0%, var(--hero-secondary) 100%);
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--hero-primary) 0%, var(--hero-secondary) 100%);
    }
  }
`;

export const HomeSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    // Inject morph styles into the head
    const styleSheet = document.createElement("style");
    styleSheet.innerText = morphStyles;
    document.head.appendChild(styleSheet);

    return () => {
      // Clean up the stylesheet when the component unmounts
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 py-20 md:py-20"
      data-aos="fade-up"
      id="home">
      <div className="max-w-[90%] w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-center md:text-left order-2 md:order-1 max-w-[90%]" // Text align left on medium screens
          >
            <p className="text-lg md:text-2xl text-gray-300 mb-2">
              Hi, I am
            </p>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 ">
              Srijan Maurya
            </h1>
            <TypeAnimation
              sequence={[
                "a MERN FullStack Developer",
                3000,
                "a Problem Solver",
                3000,
                "a Tech Enthusiast",
                3000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-3xl text-blue-400 font-medium"
              repeat={Infinity}
            />
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a href="#works">
                <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 linear transform hover:scale-105">
                  My Projects
                </button>
              </a>
              <a href="#contact">
                <button className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 linear transform hover:scale-105">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Image Content - Order changed for medium screens and up */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex justify-center order-1 md:order-2" // This div centers the morph-shape-container
          >
            <div className="morph-shape-container">
              {" "}
              {/* New container for sizing */}
              <div className="morph-shape">
                {" "}
                {/* This div will morph */}
                <img
                  src={animatedImage}
                  alt="Srijan Maurya - MERN FullStack Developer"
                  // remove the image background color using blend mode
                  // className is now handled by .morph-shape img in the CSS above
                  // No need for rounded-full or shadow here as the parent handles the shape and image is clipped.
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
