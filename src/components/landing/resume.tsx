import React from "react";
import Container from "../container";

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
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#5935B3] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Frontend Engineer & UI/UX
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pb-2">
                PT Seino Indomobil Logistics | Jakarta - IDN 2020 - Now
              </p>
              <time className="mb-1 text-sm bg-[#5935B3] mr-2 px-2.5 py-0.5 rounded-full font-normal leading-none text-white dark:text-gray-500">
                2020 - Now
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pt-5">
                Interesting experience in here, where here i started to focus on
                things frontend and UI/UX engineers, in this company also work
                as fullstack developer for the website, and i also lead in every
                interface planning in many apps of company whether mobile or
                website
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#5935B3] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                IT Programmer ASP.Net C#
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pb-2">
                PT Dasa Prima | Jawa Barat - IDN
              </p>
              <time className="mb-1 text-sm bg-[#5935B3] mr-2 px-2.5 py-0.5 rounded-full font-normal leading-none text-white dark:text-gray-500">
                2018 - 2020
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pt-5">
                Develop web-based applications ASP.Net C#, and using SQL Server
                database, the website is for operational
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#5935B3] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Web Developer
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pb-2">
                BMT Digital | Jawa Barat - IDN
              </p>
              <time className="mb-1 text-sm bg-[#5935B3] mr-2 px-2.5 py-0.5 rounded-full font-normal leading-none text-white dark:text-gray-500">
                2017 - 2018
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pt-5">
                Inside company we create apps for Point of Sale and Comapany
                Profile Base on Website, we develope this project with fullstack
                php native and combine with jquery, to database we use MySql
                Server
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#5935B3] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Internship Programmer Fullstack PHP
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pb-2">
                PT Inti Ganda Perdana (Astra Group) | Jakarta - IDN
              </p>
              <time className="mb-1 text-sm bg-[#5935B3] mr-2 px-2.5 py-0.5 rounded-full font-normal leading-none text-white dark:text-gray-500">
                2016 - 2017
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 pt-5">
                During the internship process I developed an application website
                - based calibration scheduling using PHP Native and MySQL
                databases
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
