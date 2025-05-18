// AnimatedToggleButton.js
import React from "react";

export const AnimatedToggleButton = ({
  text,
  hoverText,
  onClick,
  isActive,
}) => {
  // Define base styles that can be overridden or extended by isActive
  const baseBgColor = "bg-slate-700"; // Default background for inactive
  const baseTextColor = "text-slate-300"; // Default text for inactive
  const activeBgColor = "bg-sky-600"; // A distinct active background, slightly different from hover
  const activeTextColor = "text-white";

  // Layer colors for the animation
  const layer1Color = "bg-sky-300"; // Lightest
  const layer2Color = "bg-sky-400";
  const layer3Color = "bg-sky-500"; // Darkest, matches hover text background

  return (
    <button
      onClick={onClick}
      className={` overflow-hidden relative py-2.5 px-6 md:py-3 md:px-8 h-auto md:h-14 text-base md:text-lg font-semibold border-none rounded-md cursor-pointer z-10  focus:outline-none transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? `${activeBgColor} ${activeTextColor} shadow-lg scale-105`
                      : `${baseBgColor} ${baseTextColor} hover:shadow-md group`
                  }`}>
      <span className="relative z-20 transition-opacity duration-300 group-hover:opacity-0">
        {text} {/* Initial text visible */}
      </span>

      {/* Animated Layers - these will be under the hoverText */}
      <span
        className={`absolute w-full h-full md:w-52 md:h-42 -top-2 md:-top-10 -left-1/4 md:-left-2 ${layer1Color} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left z-0`}></span>
      <span
        className={`absolute w-full h-full md:w-52 md:h-42 -top-2 md:-top-10 -left-1/4 md:-left-2 ${layer2Color} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left z-0`}></span>
      <span
        className={`absolute w-full h-full md:w-52 md:h-42 -top-2 md:-top-10 -left-1/4 md:-left-2 ${layer3Color} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left z-0`}></span>

      {/* Text that appears on hover */}
      <span
        className={`absolute inset-0 flex items-center justify-center w-full h-full group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 z-20 ${
          isActive ? activeTextColor : "text-white" // Ensure hover text is visible
        }`}>
        {hoverText || text}{" "}
        {/* Fallback to original text if no hoverText */}
      </span>
    </button>
  );
};
