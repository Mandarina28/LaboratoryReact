import { Order } from "../model/order.model";

// Datos de ejemplo que inicializan la pantalla mientras no hay backend.
export const orderMock: Order = {
  id: 1,
  number: "PED-0001",
  date: "2026-07-28",
  supplier: "Empresa Demo",
  lines: [
    {
      id: 1,
      product: "Portátil",
      amount: 950,
      validated: false,
    },
    {
      id: 2,
      product: "Ratón",
      amount: 30,
      validated: true,
    },
    {
      id: 3,
      product: "Teclado",
      amount: 60,
      validated: false,
    },
  ],
};
