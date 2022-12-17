import { ADDRESS } from "@constants";
import { Card } from "@components";
import { BsGeoAlt } from "react-icons/bs";

export const Address: React.FC = () => {
  return (
    <Card icon={BsGeoAlt} label="Address">
      <address className="text-stone-600 not-italic">
        {ADDRESS.streetAddress}
        <br />
        {ADDRESS.addressLocality}, {ADDRESS.addressRegion}, {ADDRESS.postalCode}
      </address>
    </Card>
  );
};
