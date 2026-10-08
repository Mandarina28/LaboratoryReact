import { OrderLineModel } from "./order-line.model";

// Forma de un pedido: información general más una lista de líneas.
export interface Order {
  id: number;
  number: string;
  supplier: string;
  date: string;
  lines: OrderLineModel[];
}
