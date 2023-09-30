import React from "react";
import Container from "../container";

const Support = () => {
  return (
    <>
      <section
        className="mt-5 xl:mt-10 relative flex xl:h-[500px] w-screen items-start  from-violet-100  before:absolute before:h-[340px] before:w-[340px] before:rounded-full before:bg-gradient-to-b"
        id="support"
      >
        <Container>
          <div className="mx-auto grid grid-cols-12 gap-5">
            <div className="z-20 col-span-12 lg:col-span-6">
              <div className="flex w-full flex-col space-y-5 text-center xl:mt-20 xl:text-left md:text-center">
                <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
                  Create UI for your mobile apps
                </h2>
                <div className="text-md font-normal tracking-wider text-primary">
                  a lots experience for UI and UX
                </div>
                <p className="text-gray-500 text-md font-normal">
                  Build a beautiful, modern mobile apps with flexible with
                  component. built to perform fast on the all of the latest
                  mobile devices. Build apps with a small footprint and built-in
                  best practices like hardware accelerated transitions,
                  touch-optimized gestures, pre-rendering, and more.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div
                className="float-right"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <img
                  src="/static/img/brand/mobile-dms.png"
                  alt="aditya_septama"
                  className=""
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
