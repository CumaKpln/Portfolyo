import React from "react";
import case1 from '../images/case1.jpg'
export default function Works() {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-semibold text-white text-center my-10 opacity-90">
        My latest work
      </h1>
      <div className="container cursor-pointer mx-auto p-7 gap-3 ">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <img
              className="w-auto hover:scale-105 duration-300 rounded-xl size-80"
              src="https://raw.githubusercontent.com/CumaKpln/emporium-web/master/1.png"
              alt=""
            />
          </div>{" "}
          <div>
            <img
              className="w-auto hover:scale-105 duration-300 rounded-xl size-80"
              src={case1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
