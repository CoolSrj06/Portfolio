import React, { useState, useEffect, useRef } from "react"; // Added useRef
import AWSsolutionArchitect from "../assets/AWS solution architect associate.png";
import BitsAndBytes from "../assets/BitsAndBytesCN.png";
import CloudComputing from "../assets/Cloud Computing.png";
import DevOps from "../assets/DevOps Certificate.png";
import MarketingAnalytics from "../assets/Marketing Analytics.png";
import UIUX from "../assets/UIUX.png";
import Python from "../assets/VItyarthi Python certificate.png";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"; // Using react-icons for arrows

const certificatesData = [
  // Renamed for clarity
  {
    id: 1,
    title: "AWS Solution Architect Associate",
    image: AWSsolutionArchitect, // Removed template literal, direct import is fine
  },
  {
    id: 2,
    title: "Bits and Bytes of Computer Networking", // Shortened for display
    image: BitsAndBytes,
  },
  {
    id: 3,
    title: "NPTEL Cloud Computing",
    image: CloudComputing,
  },
  {
    id: 4,
    title: "DevOps Fundamentals", // Assuming a more general title
    image: DevOps,
  },
  {
    id: 5,
    title: "NPTEL Marketing Analytics",
    image: MarketingAnalytics,
  },
  {
    id: 6,
    title: "Adobe UI/UX Design Program", // Shortened
    image: UIUX,
  },
  {
    id: 7,
    title: "Python Essentials",
    image: Python,
  },
];

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null); // For managing autoplay timer

  // Clear previous timer and set a new one
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout(); // Clear existing timer
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === certificatesData.length - 1
            ? 0
            : prevIndex + 1
        ),
      5000 // Autoplay interval: 5 seconds
    );
    return () => {
      // Cleanup on component unmount or before next effect run
      resetTimeout();
    };
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const handlePrevious = () => {
    setCurrentIndex((current) =>
      current === 0
        ? certificatesData.length - 1
        : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((current) =>
      current === certificatesData.length - 1
        ? 0
        : current + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section
      className="py-16 md:py-24 bg-slate-900"
      id="certifications">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12 md:mb-8"
          data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative pb-2">
            My Certifications
            <span className="block h-1 w-1/4 bg-gradient-to-r from-teal-400 to-cyan-500 mt-2 mx-auto"></span>
          </h2>
        </div>

        <div
          className="relative max-w-[70%] mx-auto"
          data-aos="fade-up">
          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            {/* Inner container that slides */}
            <div
              className="whitespace-nowrap transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * 100
                }%)`,
              }}>
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="inline-block w-full align-top p-6 md:p-8">
                  <div className="aspect-[16/9] max-h-[500px] mx-auto overflow-hidden rounded-md bg-black flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain" // Ensures full image visibility
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="cursor-pointer absolute top-1/2 left-0 sm:-left-16 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black/20 text-white flex items-center justify-center hover:border-black hover:scale-[1.2] transition-colors duration-300 focus:outline-none shadow-lg"
            onClick={handlePrevious}
            aria-label="Previous certificate">
            <FaChevronLeft size={20} />
          </button>
          <button
            className=" cursor-pointer absolute top-1/2 right-0 sm:-right-16 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black/20 text-white flex items-center justify-center hover:border-black hover:scale-[1.2] transition-colors duration-300 focus:outline-none shadow-lg"
            onClick={handleNext}
            aria-label="Next certificate">
            <FaChevronRight size={20} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
            {certificatesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-sky-400 ${
                  currentIndex === idx
                    ? "bg-sky-500 scale-125"
                    : "bg-slate-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
