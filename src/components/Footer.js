import { FaRegCopyright } from "react-icons/fa6";
import logo from "../images/logo.jpg";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-2 mt-10 text-white   justify-between max-md:grid-cols-1">
        <div className="flex flex-col mb-6">
          <img src={logo} alt="logo" className="w-1/4 bg-transparent" />
          <h3 className="font-medium text-lg py-5 text-white opacity-90 max-md:p-5">
            I am a frontend developer from Antalya, Türkiye with 2 years of{" "}
            <br />
            experience in multiple companies like{" "}
            <a
              className="font-semibold text-xl py-5 text-white opacity-90 hover:text-black"
              href="https://www.softalya.com/tr"
            >
              Softalya Software Inc.
            </a>
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-full ">
            <input
              id="message"
              placeholder="Enter your message"
              className="p-4 w-full border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-800 text-white opacity-90"
            />
          </div>
          <div className="transitions-all transform hover:scale-105">
            <a
              href="#"
              className="bg-custom-gradient p-5 rounded-full text-white font-base"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom pb-5">
        <hr className="border-1 mt-5 opacity-30 rounded-full" />
        <div className="justify-between mt-5 flex">
          <div className="flex text-white gap-2 items-center  opacity-90">
            <FaRegCopyright />
            <p>2024 Your Company, Inc. All rights reserved.</p>
          </div>
          <div className="flex gap-5 text-white text-opacity-90">
            <a href="https://www.instagram.com/cuma.kaplan._/">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/CumaKpln">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/cuma-kaplan-330821269/">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-slate-800 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}
