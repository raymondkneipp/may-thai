import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { NextSeo } from "next-seo";
import Head from "next/head";

const ballantines = localFont({
  src: "./ballantines-serial-medium-regular.ttf",
  weight: "400",
  variable: "--font-ballantines",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NextSeo
        title="Thai Bistro & Chinese Cuisine"
        titleTemplate="May-Thai | %s | Milford, OH"
        description="Thai curries & stir-fries, plus a few Chinese dishes, in a modern, sunset-colored dining room."
      />
      <div className={`${ballantines.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
