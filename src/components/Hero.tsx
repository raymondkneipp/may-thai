import Image from "next/image";
import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <div className="w-full flex items-center relative">
      <Container>
        <div className="lg:w-1/2 py-36 z-20 relative">
          <div className="flex flex-col gap-4">
            <h1 className="text-fancy leading-fancy font-fancy">
              <span className="text-red-600">Thai</span> Bistro &<br />
              <span className="text-red-600">Chinese</span> Cuisine
            </h1>
            <p className="text-lg">
              Thai curries & stir-fries, plus a few Chinese dishes, in a modern,
              sunset-colored dining room.
            </p>
            <div className="flex gap-8">
              <Button
                href="/menu"
                size="large"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
                    />
                  </svg>
                }
              >
                View Menu
              </Button>
              <Button href="/contact" intent="secondary" size="large">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-stone-100/75 z-10 absolute inset-0"></div>
      <Image src="/wood.jpg" alt="" fill />
      <div className="inset-0 md:left-1/2 absolute z-10 overflow-hidden">
        <Image
          src="/dish.png"
          alt="Thai dish"
          width={1000}
          height={1000}
          className="absolute -bottom-1/4 -right-1/4"
        />
      </div>
    </div>
  );
}
