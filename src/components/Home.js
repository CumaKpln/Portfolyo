import React from "react";
import Hero from "../images/hero.jpg";

export default function Home() {
  return (
    <div className="justify-center items-center text-center py-20">
      <img className="size-60 rounded-full  mx-auto" src={Hero} alt="hero" />
      <h1 className="text-5xl pt-5 font-semibold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF8908]  to-[#B415FF]">
          I'm Cuma KAPLAN,
        </span>{" "}
        frontend developer <br /> based in TÜRKİYE.
      </h1>
      <h3 className="font-medium text-lg py-5">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla <br /> and Apple.
      </h3>

      <div className="pt-5 transitions-all transform hover:scale-105">
      <a href="#Contact" className='bg-custom-gradient p-4 rounded-3xl text-white font-base'>Connect With Me</a>
      </div>
    </div>
  );
}
