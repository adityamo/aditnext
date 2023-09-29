import React, { ReactNode } from "react";
import NavbarControl from "@/components/navbar";
import FooterControl from "@/components/footer";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <NavbarControl />
        <main className="">{children}</main>
        <FooterControl />
      </motion.div>
    </React.Fragment>
  );
};

export default Layout;
