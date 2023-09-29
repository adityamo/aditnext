import React from "react";
import Container from "../container";
import { Slide } from "react-awesome-reveal";

const Website = () => {
  return (
    <>
      <section className="mt-5 xl:mt-10" id="support">
        <Container>
          <div className="mx-auto grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div className="float-left">
                <Slide direction="left">
                  <img
                    src="/static/img/brand/website.svg"
                    alt="aditya_septama"
                    className=""
                    height={500}
                    width={500}
                  />
                </Slide>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex w-full flex-col space-y-5 text-center xl:mt-10 xl:text-left md:text-center">
                <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
                  Support your Website Apps
                </h2>
                <div className="text-md font-normal tracking-wider text-primary">
                  Webs apps with responsive design
                </div>
                <p className="text-gray-500 text-md font-normal">
                  I have create many website. Webs Apps or Landing page your
                  company, with framework programitically and responsive for
                  mobile.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Website;
