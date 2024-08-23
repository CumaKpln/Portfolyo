import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Services() {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-semibold text-white text-center my-10 opacity-90">
        My Services
      </h1>
      <div className=" cursor-pointer p-7 gap-3 ">
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white opacity-95 rounded-lg shadow-lg p-5 items-center justify-center hover:scale-105 duration-300 ">
            <h3 class="text-black font-semibold text-3xl">01</h3>
            <h2 className="text-2xl font-semibold"> Web Design</h2>
            <h2 className="text-xl mt-2">
             Html , Css , Bootstrap , Tailwind , Javascript , React , React-Redux
            </h2>
            <div className="gap-2 flex items-center justify-end text-xl">
              <h3>Read More</h3>
              <FaLongArrowAltRight />
            </div>
          </div>

          <div class="bg-white opacity-95 rounded-lg shadow-lg p-5 items-center justify-center hover:scale-105 duration-300  ">
            <h3 class="text-black font-semibold text-3xl">02</h3>
            <h2 className="text-2xl font-semibold"> Graphics Design</h2>
            <h2 className="text-xl mt-2">
              Photoshop
            </h2>
            <div className="gap-2 flex items-center justify-end text-xl">
              <h3>Read More</h3>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
