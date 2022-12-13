import { cva, type VariantProps } from "class-variance-authority";

const container = cva("container mx-auto px-4");

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={container({ className })}>{children}</div>;
}
