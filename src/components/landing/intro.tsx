import React from "react";
import Container from "../container";
import SectionTitle from "../sectiontitle";

const Intro = () => {
  return (
    <section className="">
      <SectionTitle
        pretitle="services"
        title="What can help you"
        align="item-center justify-center text-center"
      ></SectionTitle>
      <Container>
        <div className="grid gap-3 xl:gap-10 lg:grid-cols-2 xl:grid-cols-4">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-row object-center">
              <div className="mb-5 flex h-[60px] w-[60px] xl:h-[70px] xl:w-[100px] items-center justify-center rounded-xl bg-primary bg-opacity-10 me-3">
                <i className="fa fa-tv text-primary text-[25px]"></i>
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-slate-700 pb-2">Web Apps</p>
                <p className="font-normal text-gray-400 text-xs">
                  We can provide you to create Web Application
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-row object-center">
              <div className="mb-5 flex h-[60px] w-[60px]  xl:h-[70px] xl:w-[70px] items-center justify-center rounded-xl bg-green-100 me-3">
                <i className="fa fa-globe text-green-900 text-[30px]"></i>
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-slate-700 pb-2">CEO</p>
                <p className="font-normal text-gray-400 text-xs">
                  Make SEO Friendly to your apps
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-row object-center">
              <div className="mb-5 flex h-[60px] w-[60px] xl:h-[70px] xl:w-[100px] items-center justify-center rounded-xl bg-sky-100 text-primary me-3">
                <i className="fa fa-envira text-sky-400 text-[30px]"></i>
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-slate-700 pb-2">UI/UX</p>
                <p className="font-normal text-gray-400 text-xs">
                  Create Beautiful UI and nice documentation
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-row object-center">
              <div className="mb-5 flex h-[60px] w-[60px] xl:h-[70px] xl:w-[100px] items-center justify-center rounded-xl bg-red-100 me-3">
                <i className="fa fa-mobile text-red-400 text-[40px]"></i>
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-slate-700 pb-2">Mobile Apps</p>
                <p className="font-normal text-gray-400 text-xs">
                  Create nice your mobile apps and beutiful UI
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </Container>
    </section>
  );
};

export default Intro;
