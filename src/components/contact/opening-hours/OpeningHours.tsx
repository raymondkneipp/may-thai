import { OPENING_HOURS } from "@constants";

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
    <dl>
      <dt className="font-bold text-lg">Hours</dt>

      {daysOfWeek.map((day) => (
        <dd className="text-stone-600" key={day}>
          {day.slice(0, 3)}: {getHoursFromDay(day)}
        </dd>
      ))}
    </dl>
  );
};
