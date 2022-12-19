import { Footer } from "@components";
interface Props {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
