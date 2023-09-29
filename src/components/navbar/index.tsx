import React from "react";
import { siteConfig } from "@/config/site";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const NavbarControl = () => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Navbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <img src="/static/img/brand/adit_logo.svg" alt="" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {siteConfig.navItems.map((item: any, key: React.Key) => {
          if (router.asPath === item.href) {
            return (
              <React.Fragment key={key}>
                <NavbarItem isActive>
                  <Link href={item.href} color="foreground" aria-current="page">
                    {item.label}
                  </Link>
                </NavbarItem>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={key}>
                <NavbarItem>
                  <Link href={item.href} color="foreground" aria-current="page">
                    {item.label}
                  </Link>
                </NavbarItem>
              </React.Fragment>
            );
          }
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden xl:block">
          <Button
            as={Link}
            href="#"
            className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg"
          >
            Download CV
          </Button>
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu>
          {siteConfig.navMenuItems.map((item: any, key: React.Key) => {
            return (
              <React.Fragment key={key}>
                <NavbarMenuItem>
                  <Link href={item.href} color="foreground" aria-current="page">
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              </React.Fragment>
            );
          })}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarControl;
