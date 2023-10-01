import React from "react";
import Container from "../container";
import { Tabs, Tab } from "@nextui-org/react";

// Component Object
import Mobile from "../project/mobile";
import Website from "../project/website";

const Project = () => {
  return (
    <section
      id="project"
      className="bg-[url('/static/img/background/projectbackground.svg')] bg-center bg-cover bg-no-repeat"
    >
      <Container>
        <div className="flex w-full flex-col space-y-5 text-center xl:text-left">
          <div className="text-md font-normal tracking-wider text-primary">
            Project
          </div>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
            Some of Our Finest Work
          </h2>
        </div>
        <div className="pt-10 xl:pt-10 flex w-full flex-col">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-[#5935B3]",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-[#5935B3]",
            }}
          >
            <Tab
              key="mobile"
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-md xl:text-lg">Mobile</span>
                </div>
              }
            >
              <Mobile />
            </Tab>
            <Tab
              key="website"
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-md xl:text-lg">Website</span>
                </div>
              }
            >
              <Website />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default Project;
