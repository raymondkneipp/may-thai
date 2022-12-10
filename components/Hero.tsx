import Container from "./Container";

export default function Hero() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-8xl font-fancy">
              <span className="text-red-500">Thai</span> Bistro &{" "}
              <span className="text-red-500">Chinese</span> Cuisine
            </h1>
            <p className="text-lg">
              Thai curries & stir-fries, plus a few Chinese dishes, in a modern,
              sunset-colored dining room.
            </p>
          </div>
          <div>
            <div className="w-full h-auto aspect-square bg-red-500"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
