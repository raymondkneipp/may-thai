import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("rounded-2xl font-bold uppercase flex gap-3", {
  variants: {
    intent: {
      primary: [
        "bg-gradient-to-r from-red-600 to-red-500",
        "text-white",
        "shadow-xl shadow-red-400",
      ],
      secondary: [
        "bg-gradient-to-r from-stone-600 to-stone-500",
        "text-white",
        "shadow-xl shadow-stone-400",
      ],
      light: [
        "bg-gradient-to-r from-stone-200 to-stone-100",
        "text-stone-900",
        "shadow-xl shadow-red-300",
      ],
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

interface ButtonProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export function Button({
  label,
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
      {label}

      {icon}
    </Link>
  );
}
