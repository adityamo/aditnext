import React from "react";
import Container from "../container";
import { Tabs, Tab } from "@nextui-org/react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const Project = () => {
  return (
    <section
      id="project"
      className="bg-[url('/static/img/background/projectbackground.svg')]"
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
              <div className="grid grid-cols-12 gap-5 pt-5 lg:pt-5">
                <div className="col-span-12 lg:col-span-4">
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7"
                  >
                    <Image
                      removeWrapper
                      alt="Relaxing app background"
                      className="z-0 w-full h-full object-cover"
                      src="static/img/project/rumahsakit.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                      <div>
                        <p className="text-primary text-tiny"></p>
                      </div>
                      <Button
                        className="text-tiny text-white"
                        color="primary"
                        radius="full"
                        size="sm"
                      >
                        More Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7"
                  >
                    <Image
                      removeWrapper
                      alt="Relaxing app background"
                      className="z-0 w-full h-full object-cover"
                      src="static/img/project/DMS-Mobile.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                      <div>
                        <p className="text-primary text-tiny"></p>
                      </div>
                      <Button
                        className="text-tiny text-white"
                        color="primary"
                        radius="full"
                        size="sm"
                      >
                        More Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7"
                  >
                    <Image
                      removeWrapper
                      alt="Relaxing app background"
                      className="z-0 w-full h-full object-cover"
                      src="static/img/project/Potaru.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                      <div>
                        <p className="text-primary text-tiny"></p>
                      </div>
                      <Button
                        className="text-tiny text-white"
                        color="primary"
                        radius="full"
                        size="sm"
                      >
                        More Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </Tab>
            <Tab
              key="website"
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-md xl:text-lg">Website</span>
                </div>
              }
            ></Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default Project;
