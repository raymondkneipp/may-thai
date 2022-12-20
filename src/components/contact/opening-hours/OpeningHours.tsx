import { OPENING_HOURS } from "@constants";
import { Card } from "@components";
import { BsClock } from "react-icons/bs";
import { format, isSameDay, parse } from "date-fns";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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

  const openTime = format(
    parse(dayFound.opens, "HH:mm", new Date()),
    "hh:mm aaa"
  );
  const closeTime = format(
    parse(dayFound.closes, "HH:mm", new Date()),
    "hh:mm aaa"
  );

  return `${openTime} - ${closeTime}`;
}

export const OpeningHours: React.FC = () => {
  const today = new Date();

  return (
    <Card icon={BsClock} label="Hours">
      {daysOfWeek.map((day) => {
        const active = isSameDay(parse(day, "EEEE", new Date()), today);
        return (
          <p
            className={`${active ? "text-red-600" : "text-stone-600"}`}
            key={day}
          >
            {day.slice(0, 3)}: {getHoursFromDay(day)}
          </p>
        );
      })}
    </Card>
  );
};
