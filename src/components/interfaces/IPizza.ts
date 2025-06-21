import type { IToppings } from "./IToppings";

export interface IPizza {
  id: number;
  name: string;
  price: number;
  discount: {
    is_active: boolean;
    final_price: number;
  };
  toppings: number[] | IToppings[];
}
