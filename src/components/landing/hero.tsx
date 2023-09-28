import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "../container";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-5 pb-10 xl:pb-15 xl:pt-7 bg-gradient-to-t from-violet-100 to-white-500 "
    >
      <Container>
        <div className="mx-auto grid grid-cols-12 gap-x-7">
          <div className="col-span-12 text-center xl:text-left lg:col-span-6 xl:mt-10 sm:mt-5 space-y-5 xl:space-y-15">
            <p className="text-primary font-medium text-xl">
              Welcome to my universe
            </p>
            <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 text-slate-800">
              {"Hello folks, I'm "}
            </h1>
            <TypeAnimation
              sequence={[
                "Aditya",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              className="text-[2.5rem] xl:text-6xl font-bold xl:font-bold leading-tight capitalize sm:pr-8 xl:pr-10 text-transparent  5xl bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
            />
            <p className="font-normal text-gray-600">
              Building a successfull apps is challenge, I am highly energetic in
              user experience, user interface and web development.
            </p>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Catch me
            </button>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="float-right">
              <img
                src="/static/img/brand/pic-me.svg"
                alt="aditya_septama"
                className="floatImgUp"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
