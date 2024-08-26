import React from "react";
import case1 from "../images/case1.jpg";
export default function Works() {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-semibold text-white text-center my-20 opacity-90">
        Experiences
      </h1>
      <div className="container cursor-pointer mx-auto p-7 gap-3 ">
        <div class="grid grid-cols-2 gap-8 max-md:grid-cols-1 ">
          <div className="flex max-md:justify-center max-md:items-center ">
            <a href="https://github.com/CumaKpln/emporium-web">
              <img
                className="w-[500px] h-[400px] lg:w-[600px] lg:h-[600px]  hover:scale-105 duration-300 rounded-xl"
                src="https://raw.githubusercontent.com/CumaKpln/emporium-web/master/1.png"
                alt=""
              />
            </a>
          </div>

          <div className="flex max-md:justify-center max-md:items-center">
            <a href="https://github.com/CumaKpln/getir">
              <img
                className="w-[500px] h-[400px] lg:w-[600px] lg:h-[600px] hover:scale-105 duration-300 rounded-xl"
                src={case1}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
