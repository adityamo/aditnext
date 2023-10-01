import React from "react";
import Container from "../container";
import { Tabs, Tab } from "@nextui-org/react";
import DevelopmentTools from "../technology/devtools";
import DesignTools from "../technology/designtools";

const Development = () => {
  return (
    <section className="" id="technology">
      <Container>
        <div className="flex w-full flex-col items-center space-y-5 text-center xl:mt-10 xl:text-left md:text-center">
          <div className="text-md font-normal tracking-wider text-primary">
            Technology
          </div>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
            Support our project we use many platform
          </h2>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
            to successfull the project
          </h2>
        </div>
        <div className="pt-10 xl:pt-10 flex w-full flex-col items-center">
          <Tabs
            key="full"
            radius="full"
            aria-label="Tabs radius"
            color="primary"
            variant="bordered"
            classNames={{
              tabContent: "group-data-[selected=true]:text-white",
              tab: "h-12",
            }}
          >
            <Tab key="dev" title="Development Tech">
              <DevelopmentTools />
            </Tab>
            <Tab key="design" title="Design Tools">
              <DesignTools />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default Development;
