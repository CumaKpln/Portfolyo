import React from "react";
import case1 from "../images/case1.jpg";
export default function Works() {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-semibold text-white text-center my-20 opacity-90">
      Experiences
      </h1>
      <div className="container cursor-pointer mx-auto p-7 gap-3 ">
        <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1 ">
          <div className="flex max-md:justify-center max-md:items-center">
            <img
              className="w-auto hover:scale-105 duration-300 rounded-xl"
              src="https://raw.githubusercontent.com/CumaKpln/emporium-web/master/1.png"
              alt=""
            />
          </div>

          <div className="flex max-md:justify-center max-md:items-center">
            <img
              className="w-full h-auto hover:scale-105 duration-300 rounded-xl size-80"
              src={case1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
