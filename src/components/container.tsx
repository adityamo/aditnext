import React, { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 pt-10  ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
