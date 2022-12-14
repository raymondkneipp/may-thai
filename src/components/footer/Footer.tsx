import { Container, Logo } from "@components";
import { ADDRESS, NAV_ROUTES, OPENING_HOURS, PHONE_NUMBERS } from "@constants";
import Link from "next/link";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;
type DayOfWeek = typeof daysOfWeek[number];

function getHoursFromDay(dayofWeek: DayOfWeek) {
  const dayFound = OPENING_HOURS.find((group) => {
    if (group.dayOfWeek.includes(dayofWeek)) {
      return true;
    }
  });

  if (!dayFound) {
    return "Closed";
  }

  return `${dayFound.opens} - ${dayFound.closes}`;
}

export function Footer() {
  return (
    <footer className="bg-stone-200 py-12">
      <Container>
        <div className="flex items-start justify-between">
          <Logo />

          <div className="flex flex-col gap-3">
            <div>
              <h2 className="font-bold text-sm">Address</h2>
              <address className="text-stone-600 not-italic">
                {ADDRESS.streetAddress}, {ADDRESS.addressLocality},{" "}
                {ADDRESS.addressRegion}, {ADDRESS.postalCode}
              </address>
            </div>

            <dl>
              <dt className="font-bold text-sm">Phone</dt>
              <dd className="text-stone-600">
                <Link href={`tel:${PHONE_NUMBERS[0]}`}>{PHONE_NUMBERS[0]}</Link>
              </dd>
            </dl>

            <dl>
              <dt className="font-bold text-sm">Alternate Phone</dt>
              <dd className="text-stone-600">
                <Link href={`tel:${PHONE_NUMBERS[1]}`}>{PHONE_NUMBERS[1]}</Link>
              </dd>
            </dl>
          </div>

          {/* hightlight current day */}
          {/* date-fns format times */}
          {/* time tag? */}
          <dl>
            <dt className="font-bold text-sm">Hours</dt>

            {daysOfWeek.map((day) => (
              <dd className="text-stone-600" key={day}>
                {day.slice(0, 3)}: {getHoursFromDay(day)}
              </dd>
            ))}
          </dl>

          <div>
            <h2 className="font-bold text-sm">Pages</h2>

            <ul>
              {NAV_ROUTES.map((page) => (
                <li key={page.label}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="https://raymondkneipp.com">
          Website created by Raymond Kneipp
        </a>
      </Container>
    </footer>
  );
}
