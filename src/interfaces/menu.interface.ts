import type { IDish } from "@interfaces/dish.interface";

export interface IMenu {
  name: string;
  description?: string;
  dishes: IDish[];
  proteins?: IDish[];
}
