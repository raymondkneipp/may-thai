import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-9xl font-fancy leading-[90px]">
              <span className="text-red-500">Thai</span> Bistro &{" "}
              <span className="text-red-500">Chinese</span> Cuisine
            </h1>
            <p className="text-lg mr-36">
              Thai curries & stir-fries, plus a few Chinese dishes, in a modern,
              sunset-colored dining room.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/dish.png"
              alt="Thai dish"
              width={900}
              height={900}
              className="absolute top-0 left-0 w-auto h-screen"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
