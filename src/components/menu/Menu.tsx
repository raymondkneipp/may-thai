import type { IMenu } from "@interfaces/menu.interface";
import { Dish } from "./dish";

export const Menu: React.FC<IMenu> = ({
  name,
  description,
  dishes,
  proteins,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-3">
          <div className="h-px w-full bg-red-600 flex-1"></div>
          <h2 className="text-5xl text-red-600 font-fancy text-center">
            {name}
          </h2>
          <div className="h-px w-full bg-red-600 flex-1"></div>
        </div>
        {description && (
          <p className="text-lg text-center max-w-screen-sm mx-auto">
            {description}
          </p>
        )}
      </div>

      {proteins && (
        <div className="flex flex-col gap-3">
          <span className="text-center italic">Choose a meat or protein</span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {proteins.map((protein) => (
              <Dish {...protein} key={protein.name} />
            ))}
          </div>
        </div>
      )}

      {proteins && <span className="text-center italic">Choose an entree</span>}

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {dishes.map((dish) => (
          <Dish {...dish} key={dish.name} />
        ))}
      </div>
    </div>
  );
};
