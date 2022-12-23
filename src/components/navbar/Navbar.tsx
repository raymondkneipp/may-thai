import { NAV_ROUTES } from "@constants";
import { Container, Logo } from "@components";
import { NavbarItem } from "./navbar-item";
import { Popover } from "@headlessui/react";
import { BsList } from "react-icons/bs";

export const Navbar: React.FC = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between py-3">
        <Logo />

        <div className="sm:flex items-center gap-3 hidden">
          {NAV_ROUTES.map((page) => (
            <NavbarItem key={page.label} href={page.href}>
              {page.label}
            </NavbarItem>
          ))}
        </div>

        <Popover className="relative sm:hidden">
          <Popover.Button className="p-3 bg-stone-100 hover:shadow-xl hover:bg-stone-50 transition-all shadow-stone-200 rounded-2xl">
            <BsList size={24} />
          </Popover.Button>

          <Popover.Panel className="absolute z-10 right-0 bg-stone-100 rounded-2xl shadow-xl shadow-stone-200 p-3 overflow-hidden mt-3 duration-300">
            <div className="grid items-center gap-3">
              {NAV_ROUTES.map((page) => (
                <NavbarItem key={page.label} href={page.href}>
                  {page.label}
                </NavbarItem>
              ))}
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </nav>
    </Container>
  );
};
