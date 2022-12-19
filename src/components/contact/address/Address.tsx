import { ADDRESS } from "@constants";
import { Anchor, Card } from "@components";
import { BsGeoAlt } from "react-icons/bs";

export const Address: React.FC = () => {
  return (
    <Card icon={BsGeoAlt} label="Address">
      <Anchor href="https://www.google.com/maps/place/1053+OH-28,+Milford,+OH+45150/@39.1932877,-84.2412729,17z/data=!3m1!4b1!4m5!3m4!1s0x8840ffc433b8dddd:0x68938ce0d3d29767!8m2!3d39.1932877!4d-84.2412729">
        <address className="text-stone-600 not-italic">
          {ADDRESS.streetAddress}
          <br />
          {ADDRESS.addressLocality}, {ADDRESS.addressRegion},{" "}
          {ADDRESS.postalCode}
        </address>
      </Anchor>
    </Card>
  );
};
