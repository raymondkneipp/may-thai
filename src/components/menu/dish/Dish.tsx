import { IDish } from "@interfaces/dish.interface";
import { FaPepperHot } from "react-icons/fa";

export const Dish: React.FC<IDish> = ({
  name,
  description,
  price,
  spicy = false,
}) => {
  return (
    <div className="shadow-xl shadow-stone-200 rounded-2xl p-3 bg-stone-50 flex flex-col gap-1">
      <div className="flex items-center justify-between gap-3">
        {spicy && (
          <span className="text-red-600">
            <FaPepperHot />
          </span>
        )}
        <h3 className="font-bold flex-1">{name}</h3>
        {price && <span>${price.toFixed(2)}</span>}
      </div>
      {description && <p className="text-sm text-stone-600">{description}</p>}
    </div>
  );
};
