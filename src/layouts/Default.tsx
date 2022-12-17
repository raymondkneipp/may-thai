interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>default</div>
      {children}
    </>
  );
};
