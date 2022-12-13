import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const ballantines = localFont({
  src: "./ballantines-serial-medium-regular.ttf",
  weight: "400",
  variable: "--font-ballantines",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ballantines.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
