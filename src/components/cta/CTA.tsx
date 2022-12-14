import { Button, Container } from "@components";
import { PHONE_NUMBERS } from "@constants";

export function CTA() {
  return (
    <section className="bg-red-600 py-12">
      <Container className="flex flex-col items-center gap-6 max-w-screen-sm">
        <h2 className="font-fancy text-6xl text-white text-center">
          Dine In or Carry Out
        </h2>
        <p className="text-stone-100 text-center">
          Come and have a meal with us today, or give us a call to place an
          order for take out. We look forward to serving you.
        </p>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <Button
            size="large"
            intent="light"
            label="Call Now"
            href={`tel:${PHONE_NUMBERS[0]}`}
          />
          <Button
            size="large"
            intent="primary"
            label="Get Directions"
            href="/"
          />
        </div>
      </Container>
    </section>
  );
}
