import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { NextPage } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";

export type NextPageWithLayout<Type = any> = NextPage<Type> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Head>
          <title>Aditya Septama</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default MyApp;
