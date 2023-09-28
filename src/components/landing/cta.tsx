import React from "react";
import Container from "../container";
import { Button } from "@nextui-org/react";

const Cta = () => {
  return (
    <section className="" id="contact">
      <Container>
        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
          <div className="flex-grow text-center lg:text-left">
            <h2 className="text-2xl font-medium lg:text-3xl">
              Need help for your project ?
            </h2>
            <p className="mt-2 font-normal text-white text-opacity-90 lg:text-md">
              catch me and find the best solution
            </p>
          </div>
          <div className="flex-shrink-0 w-full text-center lg:w-auto">
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Catch me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
