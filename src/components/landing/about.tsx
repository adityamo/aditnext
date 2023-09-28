import React from "react";
import Container from "../container";

const Aboutme = () => {
  return (
    <section id="aboutme" className="">
      <Container>
        <div className="mx-auto grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <div className="float-left">
              <img
                src="/static/img/brand/about-me.svg"
                alt="aditya_septama"
                className=""
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-last">
            <div className="flex w-full flex-col space-y-5 text-center xl:mt-10 xl:text-left md:text-center">
              <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
                About Me
              </h2>
              <div className="text-md font-normal tracking-wider text-primary">
                Bring our creativity to your work !
              </div>
              <p className="text-gray-500 text-md font-normal">
                Hello i’m from indonesian, i have a career in IT System and
                Development for more than 5 years, with that experience, I
                mastered web-based programming and UI/UX, i also familiar with
                data management with database. Now i’m focus on frontend
                engineer. With some of the experience i’m sure it can help to
                grow your busineess, really like challenges and also teamwork.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Aboutme;
