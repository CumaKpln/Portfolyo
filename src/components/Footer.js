import { FaRegCopyright } from "react-icons/fa6";
import logo from "../images/logo.jpg";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 mt-10 text-white   justify-between max-md:container max-md:mx-auto max-md:grid-cols-1">

        <div className="flex flex-col mb-6">
          <img src={logo} alt="logo" className="w-1/4 bg-transparent" />
          <h3 className="font-medium text-base">
            I am a frontend developer from California, <br />
            USA with 10 years of experience in multiple companies like
            Microsoft, Tesla and Apple.
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
    </div>
  );
}
