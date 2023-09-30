import React from "react";
import Container from "../container";
import { siteConfig } from "@/config/site";

const Resume = () => {
  return (
    <section className="" id="resume">
      <Container>
        <div className="flex w-full flex-col space-y-3 text-left">
          <div className="text-md font-normal tracking-wider text-primary">
            Education & Experience
          </div>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
            My Resume
          </h2>
          <p className="text-sm font-normal">
            Here are some of my experience and education during my career
          </p>
        </div>
        <div className="pt-10">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {siteConfig.resume.map((item: any, key: React.Key) => {
              return (
                <li className="mb-10 ml-4" key={key}>
                  <div className="absolute w-3 h-3 bg-[#5935B3] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.jobtitle}
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400 pb-2">
                    {item.company} | {item.location}
                  </p>
                  <time className="mb-1 text-sm bg-[#5935B3] mr-2 px-2.5 py-0.5 rounded-full font-normal leading-none text-white dark:text-gray-500">
                    {item.year}
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400 pt-5">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
