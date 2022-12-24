import { Footer, Navbar } from "@components";
import { NextSeo } from "next-seo";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const DefaultLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <NextSeo title={title} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
