import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("rounded-2xl font-bold uppercase flex gap-3", {
  variants: {
    intent: {
      primary: ["bg-gradient-to-r from-red-600 to-red-500", "text-white"],
      secondary: ["bg-gradient-to-r from-stone-600 to-stone-500", "text-white"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2.5", "px-5"],
      large: ["text-base", "py-3.5", "px-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  href: string;
  children: string;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  href,
  className,
  intent,
  size,
  icon = null,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={button({ intent, size, className })}
      {...props}
    >
      {children}

      {icon}
    </Link>
  );
}
