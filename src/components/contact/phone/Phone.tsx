import Link from "next/link";
import { PHONE_NUMBERS } from "@constants";

export function Phone() {
  return (
    <dl>
      <dt className="font-bold text-lg">Phone</dt>
      <dd className="text-stone-600">
        <Link href={`tel:${PHONE_NUMBERS[0]}`}>{PHONE_NUMBERS[0]}</Link>
      </dd>
    </dl>
  );
}
