import {
  Address,
  Container,
  Phone,
  OpeningHours,
  Logo,
  Card,
  Anchor,
} from "@components";
import { NAV_ROUTES } from "@constants";
import { BsLink45Deg } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12">
      <Container className="flex flex-col gap-6 items-center">
        <div className="flex items-start justify-between w-full flex-col md:flex-row gap-6">
          <Logo />

          <Card icon={BsLink45Deg} label="Pages">
            <ul>
              {NAV_ROUTES.map((route) => (
                <li key={route.label}>
                  <Anchor href={route.href}>{route.label}</Anchor>
                </li>
              ))}
            </ul>
          </Card>

          <Address />
          <Phone />

          <OpeningHours />
        </div>

        <Anchor href="https://raymondkneipp.com">
          Website created by Raymond Kneipp
        </Anchor>
      </Container>
    </footer>
  );
};
