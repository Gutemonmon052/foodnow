import type { IToppings } from "./IToppings";
import type { IPizza } from "./IPizza";
import type { ISize } from "./ISize";

export interface IOrder {
  pizza: IPizza | null;
  size: ISize | null;
  toppings: IToppings[];
}
