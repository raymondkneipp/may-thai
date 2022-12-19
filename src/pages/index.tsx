import { Hero, Testimonials, CTA, Gallery } from "@components";
import { LandingLayout } from "@layouts";

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <Testimonials />
      <Gallery />
      <CTA />
    </LandingLayout>
  );
}
