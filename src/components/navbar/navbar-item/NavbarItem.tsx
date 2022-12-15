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
      className={`py-3 px-6 rounded-2xl ${
        active
          ? "bg-stone-50 shadow-xl shadow-stone-200"
          : "border-stone-900/10 hover:bg-stone-50 hover:shadow-xl hover:shadow-stone-200 transition-all duration-300"
      }`}
    >
      {children}
    </Link>
  );
}
