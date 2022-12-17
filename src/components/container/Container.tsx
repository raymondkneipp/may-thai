import { cva, type VariantProps } from "class-variance-authority";

const container = cva("container mx-auto px-3");

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <div className={container({ className })}>{children}</div>;
};
