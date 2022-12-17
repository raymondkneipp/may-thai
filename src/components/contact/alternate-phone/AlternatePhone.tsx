import Link from "next/link";
import { PHONE_NUMBERS } from "@constants";

export function AlternatePhone() {
  return (
    <dl>
      <dt className="font-bold text-lg">Alternate Phone</dt>
      <dd className="text-stone-600">
        <Link href={`tel:${PHONE_NUMBERS[1]}`}>{PHONE_NUMBERS[1]}</Link>
      </dd>
    </dl>
  );
}
