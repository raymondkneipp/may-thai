import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const Anchor: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="underline decoration-stone-200 underline-offset-2 hover:decoration-stone-900 transition-all"
    >
      {children}
    </Link>
  );
};
