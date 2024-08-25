import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.jpg";
import HamburgerMenu from "./HamburgerMenu";

export default function Headers() {
  return (
    <div className="container mx-auto">
      <div className="hidden md:block">
        <div className=" justify-between items-center font-semibold text-white py-5 flex">
          <img src={logo} alt="logo" className="w-1/6" />
          <div className="flex gap-x-12">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="transitions-all transform hover:scale-110 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="transitions-all transform hover:scale-110 cursor-pointer"
            >
              About Me
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="transitions-all transform hover:scale-110 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="works"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="transitions-all transform hover:scale-110 cursor-pointer"
            >
              Experiences
            </Link>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
          >
            <button className="bg-custom-gradient p-3 rounded-3xl transitions-all transform hover:scale-105">
              Connect With Me
            </button>
          </Link>
        </div>
      </div>
      <div className="md:hidden block ">
        <div className="px-5">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
