import { NAV_ROUTES } from "@constants";
import { Container, Logo } from "@components";
import { NavbarItem } from "./navbar-item";

export function Navbar() {
  return (
    <Container>
      <nav className="flex items-center justify-between py-4">
        <Logo />

        <div className="flex items-center">
          {NAV_ROUTES.map((page) => (
            <NavbarItem key={page.href} href={page.href}>
              {page.label}
            </NavbarItem>
          ))}
        </div>
      </nav>
    </Container>
  );
}
