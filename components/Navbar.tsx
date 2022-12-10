import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";
import Logo from "./logo";

interface Props {
  children: string;
  href: string;
}

function NavItem({ children, href }: Props) {
  const router = useRouter();
  const active = href === router.pathname;

  return (
    <Link
      href={href}
      className={`border-b-4 p-4 ${
        active ? "border-red-500" : "border-stone-100/50"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <Container>
      <nav className="flex items-center justify-between py-4">
        <Logo />

        <div className="flex items-center">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/menu">Menu</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </div>
      </nav>
    </Container>
  );
}
