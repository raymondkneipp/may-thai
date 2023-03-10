import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "rounded-2xl font-bold uppercase flex gap-3 bg-wide bg-[0%] transition-all hover:bg-[100%] duration-300 bg-gradient-to-r",
  {
    variants: {
      intent: {
        primary: [
          "from-red-600 via-red-400 to-red-500",
          "text-white",
          "shadow-red-400",
        ],
        secondary: [
          "from-stone-600 via-stone-400 to-stone-500",
          "text-white",
          "shadow-stone-400",
        ],
        light: [
          "from-stone-300 via-stone-100 to-stone-200",
          "text-stone-900",
          "shadow-red-300",
        ],
      },
      size: {
        small: ["text-sm", "py-1.5", "px-3", "shadow-md"],
        medium: ["text-base", "py-3", "px-6", "shadow-lg"],
        large: ["text-base", "py-4", "px-7", "shadow-xl"],
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
