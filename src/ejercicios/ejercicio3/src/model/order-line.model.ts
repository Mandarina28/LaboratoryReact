// Forma de cada artículo del pedido. validated indica si está aprobado.
export interface OrderLineModel {
  id: number;
  product: string;
  amount: number;
  validated: boolean;
}
