import React, { ReactNode } from "react";
import NavbarControl from "@/components/navbar";
import FooterControl from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <NavbarControl />
      <main className="">{children}</main>
      <FooterControl />
    </React.Fragment>
  );
};

export default Layout;
