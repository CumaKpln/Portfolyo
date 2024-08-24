import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto mt-10 text-white flex justify-between">
      
      <div className="flex flex-col mb-6">
        <a className="text-3xl mb-2" href="#">
          🅲🆄🅼🅰
        </a>
        <h3 className="font-medium text-base">
          I am a frontend developer from California, <br />
          USA with 10 years of experience in multiple companies like Microsoft,
          Tesla and Apple.
        </h3>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-full ">
          <input
            id="message"
            placeholder="Enter your message"
            className="p-4 w-full border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
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
  );
}
