import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-6xl font-semibold text-white text-center my-20">
        Get in touch
      </h1>
      <div className="grid grid-cols-2  max-md:grid-cols-1 max-md:gap-y-5 max-md:container p-8">
        <div className="">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF8908]  to-[#B415FF] text-5xl font-semibold mb-5 ">
            Let's talk
          </h2>
          <p className=" text-white opacity-95 mb-4 lg:min-w-32">
            I'm currently avaliable to take on new projects, so feel free to
            send me a <br /> message about anything that you want me to work on.
            You can contact anytime.
          </p>
          <ul className="text-white  opacity-95 ">
            <div className="flex items-center gap-4 mb-3">
              <TfiEmail size={30} />
              <li className="text-center text-lg ">ccumakaplan@gmail.com</li>
            </div>{" "}
            <div className="flex items-center gap-4 mb-3">
              <BsFillTelephoneFill size={30} />
              <li className="text-center text-lg">+90 (541) 475 46 95</li>
            </div>{" "}
            <div className="flex items-center gap-4 mb-3">
              <IoLocationSharp size={40} />
              <li className="text-center text-lg">Ant, Türkiye</li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-white opacity-90">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-slate-800 text-white opacity-90"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-white opacity-90">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-800 text-white opacity-90"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-white opacity-90 ">
              Write your message here
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-800 text-white opacity-90"
              rows="4"
            ></textarea>
          </div>
          <div className="pt-5 transitions-all transform hover:scale-105  self-start max-md:self-auto ">
            <a
              href="#"
              className="bg-custom-gradient p-4 rounded-3xl text-white font-base"
            >
              Submit now
            </a>
          </div>
        </div>
      </div>
      <hr className="border-1 mt-10 opacity-85 rounded-full"/>
    </div>
  );
}
