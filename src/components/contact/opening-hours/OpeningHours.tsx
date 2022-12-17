import { OPENING_HOURS } from "@constants";
import { Card } from "@components";
import { BsClock } from "react-icons/bs";

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

{
  /* hightlight current day */
}
{
  /* date-fns format times */
}
{
  /* time tag? */
}

export const OpeningHours: React.FC = () => {
  return (
    <Card icon={BsClock} label="Hours">
      {daysOfWeek.map((day) => (
        <p className="text-stone-600" key={day}>
          {day.slice(0, 3)}: {getHoursFromDay(day)}
        </p>
      ))}
    </Card>
  );
};
