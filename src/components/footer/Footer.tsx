import {
  Address,
  Container,
  Phone,
  AlternatePhone,
  OpeningHours,
  Logo,
} from "@components";
import { NAV_ROUTES } from "@constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-200 py-12">
      <Container>
        <div className="flex items-start justify-between">
          <Logo />

          <div className="flex flex-col gap-3">
            <Address />
            <Phone />
            <AlternatePhone />
          </div>

          <OpeningHours />

          <div>
            <h2 className="text-lg font-bold">Pages</h2>
            <ul>
              {NAV_ROUTES.map((route) => (
                <li key={route.label}>
                  <Link href={route.href}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="https://raymondkneipp.com">
          Website created by Raymond Kneipp
        </Link>
      </Container>
    </footer>
  );
}
