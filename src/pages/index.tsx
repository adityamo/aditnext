import React, { ReactElement } from "react";
import Layout from "@/layouts";
import { NextPageWithLayout } from "./_app";
import Hero from "@/components/landing/hero";
import Intro from "@/components/landing/intro";
import About from "@/components/landing/about";
import Project from "@/components/landing/project";
import Support from "@/components/landing/support";
import Website from "@/components/landing/website";
import Development from "@/components/landing/development";
import Resume from "@/components/landing/resume";
import Cta from "@/components/landing/cta";

const home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Support />
      <Website />
      <Project />
      <Development />
      <Resume />
      <Cta />
    </>
  );
};

home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default home;
