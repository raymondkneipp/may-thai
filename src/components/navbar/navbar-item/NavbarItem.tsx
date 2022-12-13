import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: string;
  href: string;
}

export function NavbarItem({ children, href }: Props) {
  const router = useRouter();
  const active = href === router.pathname;

  return (
    <Link
      href={href}
      className={`border-b-4 p-4 ${
        active ? "border-red-500" : "border-stone-900/10"
      }`}
    >
      {children}
    </Link>
  );
}
