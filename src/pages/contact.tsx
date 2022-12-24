import { Address, Container, Map, OpeningHours, Phone } from "@components";
import { DefaultLayout } from "@layouts";

export default function ContactPage() {
  return (
    <DefaultLayout title="Contact Us">
      <Container className="py-12 flex flex-col gap-6">
        <h1 className="font-fancy leading-fancy text-fancy">
          Contact <span className="text-red-600">Us</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <p className="max-w-screen-sm text-lg">
            Please come and join us for lunch or dinner today, or call ahead to
            place an order for takeout. We&apos;ll be looking forward to seeing
            you.
          </p>

          <div className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-6">
                <Address />
                <Phone />
              </div>
              <OpeningHours />
            </div>
          </div>
        </div>
      </Container>
      <Map />
    </DefaultLayout>
  );
}
