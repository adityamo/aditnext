import React, { ReactNode } from "react";
import Container from "./container";

interface Props {
  pretitle?: string;
  title?: string;
  align?: string;
  children?: ReactNode;
}

const SectionTitle = ({ title, pretitle, children, align }: Props) => {
  return (
    <>
      <Container className={`flex w-full flex-col mt-4 mb-2 ${align}`}>
        {pretitle && (
          <div className="text-md font-normal tracking-wider text-primary">
            {pretitle}
          </div>
        )}
        {title && (
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-slate-700 lg:leading-tight lg:text-4xl dark:text-white">
            {title}
          </h2>
        )}

        {children && (
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {children}
          </p>
        )}
      </Container>
    </>
  );
};

export default SectionTitle;
