import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { LocalBusinessJsonLd, LogoJsonLd, NextSeo } from "next-seo";
import Head from "next/head";
import {
  ADDRESS,
  DOMAIN,
  GEO,
  OPENING_HOURS,
  PHONE_NUMBERS,
  TESTIMONIALS,
} from "@constants";

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
      <LocalBusinessJsonLd
        type="Restaurant"
        id={DOMAIN}
        name="May-Thai"
        description="Thai curries & stir-fries, plus a few Chinese dishes, in a modern, sunset-colored dining room."
        url={DOMAIN}
        telephone={PHONE_NUMBERS[0]}
        address={ADDRESS}
        geo={GEO}
        openingHours={OPENING_HOURS}
        review={TESTIMONIALS}
        servesCuisine={"Thai, Chinese"}
        images={[
          `${DOMAIN}/images/gallery/1.webp`,
          `${DOMAIN}/images/gallery/2.webp`,
          `${DOMAIN}/images/gallery/3.webp`,
          `${DOMAIN}/images/gallery/4.webp`,
        ]}
        aggregateRating={{
          ratingValue: "4.6",
          reviewCount: "391",
        }}
      />
      <LogoJsonLd logo={`${DOMAIN}/logo.png`} url={DOMAIN} />
      <div className={`${ballantines.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
