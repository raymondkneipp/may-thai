import {
  Address,
  Container,
  Phone,
  OpeningHours,
  Logo,
  Card,
} from "@components";
import { NAV_ROUTES } from "@constants";
import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12">
      <Container>
        <div className="flex items-start justify-between">
          <Logo />

          <div className="flex flex-col gap-3">
            <Address />
            <Phone />
          </div>

          <OpeningHours />

          <Card icon={BsLink45Deg} label="Pages">
            <ul>
              {NAV_ROUTES.map((route) => (
                <li key={route.label}>
                  <Link href={route.href}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Link href="https://raymondkneipp.com">
          Website created by Raymond Kneipp
        </Link>
      </Container>
    </footer>
  );
};
