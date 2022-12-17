import { ROUTES } from "@constants";
import { Button, Container, Navbar } from "@components";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-stone-200 relative overflow-hidden">
      <div className="relative z-50">
        <Navbar />
      </div>
      <Container className="flex flex-col items-center text-center md:items-start md:text-left gap-3 py-36 z-30 relative">
        <h1 className="font-fancy leading-fancy text-fancy">
          <span className="text-red-600">Thai</span> Bistro &<br />
          <span className="text-red-600">Chinese</span> Cuisine
        </h1>
        <p className="text-lg max-w-sm xl:max-w-md">
          Thai curries & stir-fries, plus a few Chinese dishes, in a modern,
          sunset-colored dining room.
        </p>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          <Button
            size="large"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
                />
              </svg>
            }
            {...ROUTES.menu}
            label="View Menu"
          />
          <Button
            size="large"
            label="Get Directions"
            href="/"
            intent="secondary"
          />
        </div>
      </Container>

      <Image src="/wood.jpg" fill alt="wood table top" className="z-0" />
      <Image
        src="/dish.png"
        alt="thai dish"
        className="z-0 md:z-10 md:top-24 absolute bottom-0 translate-y-1/2 md:left-1/2 md:inset-0 md:translate-y-0"
        width="900"
        height="900"
      />
      <div className="bg-stone-100/75 absolute inset-0"></div>
    </section>
  );
}
