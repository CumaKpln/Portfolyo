import Hero from "../images/hero.jpg";

export default function AboutMe() {
  return (
    <div className="container mx-auto my-40">
      <h1 className="text-6xl font-semibold text-white text-center my-10 opacity-90">
        About me
      </h1>
      <div class="grid grid-cols-3 gap-3 max-md:grid-cols-1 ">
        <img
          src={Hero}
          className="w-96 h-auto rounded-2xl max-md:container max-md:max-w-lg max-md:p-5"
          alt=""
        />
        <div class="col-span-2 about-para max-md:p-5">
          <h3 className="text-lg font-semibold text-white">
            I have been a freelance React JS developer for 2 years. I create
            interfaces with HTML CSS and JavaScript. I am curious about
            technology and open to continuous learning. I make it a principle to
            write clean code. My aim is to improve myself by providing
            impressive solutions in projects.
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
