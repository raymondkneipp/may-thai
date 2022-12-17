import { NAV_ROUTES } from "@constants";
import { Container, Logo } from "@components";
import { NavbarItem } from "./navbar-item";

export const Navbar: React.FC = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between py-3">
        <Logo />

        <div className="flex items-center gap-3">
          {NAV_ROUTES.map((page) => (
            <NavbarItem key={page.label} href={page.href}>
              {page.label}
            </NavbarItem>
          ))}
        </div>
      </nav>
    </Container>
  );
};
