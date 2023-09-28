import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavbarControl = () => {
  return (
    <Navbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <img src="/static/img/brand/adit_logo.svg" alt="" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem isActive>
          <Link href="#home" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#aboutme">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#technology">
            Technology
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#resume">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg"
          >
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarControl;
