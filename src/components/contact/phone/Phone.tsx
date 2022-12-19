import { PHONE_NUMBERS } from "@constants";
import { Anchor, Card } from "@components";
import { BsTelephone } from "react-icons/bs";

export const Phone: React.FC = () => {
  return (
    <Card icon={BsTelephone} label="Phone">
      <Anchor href={`tel:${PHONE_NUMBERS[0]}`}>{PHONE_NUMBERS[0]}</Anchor>
      <Anchor href={`tel:${PHONE_NUMBERS[1]}`}>{PHONE_NUMBERS[1]}</Anchor>
    </Card>
  );
};
