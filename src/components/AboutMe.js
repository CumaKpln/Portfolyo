import Hero from "../images/hero.jpg";

export default function AboutMe() {
  return (
    <div className="container mx-auto  ">
      <h1 className="text-6xl font-semibold text-white text-center my-10 opacity-90">
        About me
      </h1>
      <div class="grid grid-cols-3 gap-4">
        <div className="">
          <img src={Hero} className="w-96 h-auto rounded-2xl" alt="" />
        </div>
        <div class="col-span-2 about-para">
          <h3 className="text-lg font-semibold text-white">
            "I am a skilled Frontend Developer with 2 years of professional
            experience. Throughout my career, I have had the opportunity to
            collaborate with respected organizations, contributing to their
            success. My expertise is not only reflected in my technical
            knowledge but also in the passion and dedication I bring to each
            project."
          </h3>
          <br />
          <h3 className="text-lg font-semibold text-white">
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </h3>

          <div className="about-skills mt-10">
            <div className="about-skill transitions-all transform hover:scale-105 duration-700 flex gap-x-8">
              <p className="text-white">HTML & CSS</p>
              <div className="w-3/4 h-4 rounded-lg bg-gradient-to-r from-purple-900  via-purple-500 to-yellow-400"></div>
            </div>
            <div className="about-skill transitions-all transform hover:scale-105 my-5 duration-700 flex gap-x-16">
              <p className="text-white">React JS</p>
              <div className="w-2/3 h-4 rounded-lg bg-gradient-to-r from-purple-900  via-purple-500 to-yellow-400"></div>
            </div>
            <div className="about-skill transitions-all transform hover:scale-105 duration-700 flex gap-x-14">
              <p className="text-white">JavaScript</p>
              <div className="w-3/4 h-4 rounded-lg bg-gradient-to-r from-purple-900  via-purple-500 to-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
