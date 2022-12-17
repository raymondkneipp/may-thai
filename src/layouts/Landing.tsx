interface Props {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>landing</div>
      {children}
    </>
  );
};
