import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: string;
  href: string;
}

export const NavbarItem: React.FC<Props> = ({ children, href }) => {
  const router = useRouter();
  const active = href === router.pathname;

  return (
    <Link
      href={href}
      className={`py-3 px-6 rounded-2xl text-center ${
        active
          ? "bg-white shadow-xl shadow-stone-200"
          : "border-stone-900/10 hover:bg-stone-50 hover:shadow-xl hover:shadow-stone-200 transition-all duration-300"
      }`}
    >
      {children}
    </Link>
  );
};
