import React from "react";
import Hero from "../images/hero.jpg";

export default function Home() {
  return (
    <div  className="justify-center items-center text-center py-20 mt-20">
      <img className="size-60 rounded-full  mx-auto" src={Hero} alt="hero" />
      <h1 className="text-5xl pt-5 font-semibold text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF8908]  to-[#B415FF]">
          I'm Cuma KAPLAN,
        </span>{" "}
        frontend developer <br /> based in TÜRKİYE.
      </h1>
      <h3 className="font-medium text-lg py-5 text-white opacity-90 max-md:p-5">
        I am a frontend developer from Antalya, Türkiye with 2 years of
        experience in multiple companies like{" "}
        <a
          className="font-semibold text-xl py-5 text-white opacity-90 hover:text-black"
          href="https://www.softalya.com/tr"
        >
          Softalya Software Inc.
        </a>
       
      </h3>
    </div>
  );
}
