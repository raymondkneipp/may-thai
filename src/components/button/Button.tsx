import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "rounded-2xl font-bold uppercase flex gap-3 bg-wide bg-[0%] transition-all hover:bg-[100%] duration-300 shadow-xl",
  {
    variants: {
      intent: {
        primary: [
          "bg-gradient-to-r from-red-600 via-red-400 to-red-500",
          "text-white",
          "shadow-red-400",
        ],
        secondary: [
          "bg-gradient-to-r from-stone-600 via-stone-400 to-stone-500",
          "text-white",
          "shadow-stone-400",
        ],
        light: [
          "bg-gradient-to-r from-stone-300 via-stone-100 to-stone-200",
          "text-stone-900",
          "shadow-red-300",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-3", "px-6"],
        large: ["text-base", "py-4", "px-7"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  href,
  className,
  intent,
  size,
  icon = null,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={button({ intent, size, className })}
      {...props}
    >
      {label}

      {icon}
    </Link>
  );
};
