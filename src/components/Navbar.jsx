import React, { useState } from "react";
import Logo from "../assets/ICON.jpg";
import { FaBarsStaggered } from "react-icons/fa6";
import { TiTimesOutline } from "react-icons/ti";
import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center justify-between h-20 max-w-[90%] mx-auto w-full">
      {/* Desktop Section */}
      <div>
        <Link smooth to={"#home"}>
          <img
            src={Logo}
            alt="logo"
            className="h-8 md:h-10 object-contain rounded-[20px]"
          />
        </Link>
      </div>
      <ul className="hidden md:flex space-x-8 font-semibold">
        <li>
          <Link
            smooth
            to="#home"
            className="hover:text-[#819096]">
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#about"}
            className="hover:text-[#819096]">
            About Me
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#skills"}
            className="hover:text-[#819096]">
            Skills
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#works"}
            className="hover:text-[#819096]">
            Works
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#certifications"}
            className="hover:text-[#819096]">
            Certifications
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#contact"}
            className="hover:text-[#819096]">
            Contact me 🤙
          </Link>
        </li>
      </ul>

      {/* Mobile Section */}
      <div className="md:hidden z-50" onClick={handleClick}>
        {!nav ? (
          <FaBarsStaggered className="text-[22px]" />
        ) : (
          <TiTimesOutline className="text-[24px]" />
        )}
      </div>

      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col items-center justify-center space-y-10 text-lg sm:text-xl opacity-90 z-10 text-white transform duration-700 ${
          nav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}>
        <li>
          <Link
            smooth
            to="#home"
            className="hover:text-[#819096]">
            Home
          </Link>
        </li>
                <li>
          <Link
            smooth
            to={"#about"}
            className="hover:text-[#819096]">
            About Me
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#skills"}
            className="hover:text-[#819096]">
            Skills
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#works"}
            className="hover:text-[#819096]">
            Works
          </Link>
        </li>
        <li>
          <Link
            smooth
            to={"#certifications"}
            className="hover:text-[#819096]">
            Certifications
          </Link>
        </li>
        <li>
          <Link smooth to={"#contact"}>
            Contact me 🤙
          </Link>
        </li>
      </ul>
    </nav>
  );
};
