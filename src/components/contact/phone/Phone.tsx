import Link from "next/link";
import { PHONE_NUMBERS } from "@constants";
import { Card } from "@components";
import { BsTelephone } from "react-icons/bs";

export const Phone: React.FC = () => {
  return (
    <Card icon={BsTelephone} label="Phone">
      <Link href={`tel:${PHONE_NUMBERS[0]}`}>{PHONE_NUMBERS[0]}</Link>
      <Link href={`tel:${PHONE_NUMBERS[1]}`}>{PHONE_NUMBERS[1]}</Link>
    </Card>
  );
};
