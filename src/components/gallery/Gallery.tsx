import { Container } from "@components";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="py-12">
      <Container className="flex">
        <div className="relative aspect-square border-4 md:border-8 border-stone-200 rounded-full overflow-hidden flex-1 mb-12 shadow-xl">
          <Image
            src="/images/gallery/1.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square border-4 md:border-8 rounded-full border-stone-200 overflow-hidden flex-1 -ml-12 mt-12 shadow-xl">
          <Image
            src="/images/gallery/4.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square border-4 md:border-8 rounded-full border-stone-200 overflow-hidden flex-1 -ml-12 mb-12 shadow-xl">
          <Image
            src="/images/gallery/2.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square border-4 md:border-8 rounded-full border-stone-200 overflow-hidden flex-1 -ml-12 mt-12 shadow-xl">
          <Image
            src="/images/gallery/3.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
