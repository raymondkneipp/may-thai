import {
  Address,
  AlternatePhone,
  Container,
  Footer,
  Map,
  Navbar,
  OpeningHours,
  Phone,
} from "@components";
import { DefaultLayout } from "@layouts";

export default function Contact() {
  return (
    <DefaultLayout>
      <Navbar />
      <Container>
        <h1 className="font-fancy leading-fancy text-fancy">
          Contact <span className="text-red-600">Us</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          facilis repellendus dolorum temporibus harum laborum perspiciatis at
          assumenda sunt, expedita quidem, est sint reiciendis itaque distinctio
          unde, molestias inventore officia?
        </p>
        <Address />
        <Phone />
        <AlternatePhone />
        <OpeningHours />
      </Container>
      <Map />
      <Footer />
    </DefaultLayout>
  );
}
