import React from "react";
import { orderMock } from "../model/order.mock";
import { OrderHeader } from "../components/order-header/order-header";
import { OrderDetail } from "../components/order-detail/order-detail";
import "./order.page.css";

export const OrderPage = () => {
  // El contenedor es la fuente de verdad del pedido completo: cabecera y líneas.
  // Al cambiar order, React vuelve a renderizar los componentes que reciben sus datos.
  const [order, setOrder] = React.useState(orderMock);

  // reduce transforma muchas líneas en un único valor: la suma de sus importes.
  // sum es el acumulado y 0 es el valor inicial; line es la línea actual.
  const total = order.lines.reduce((sum, line) => sum + line.amount, 0);

  // filter conserva solo las líneas validadas; length cuenta cuántas hay.
  const validatedCount = order.lines.filter((line) => line.validated).length;

  // Estos valores se derivan de order, así que no necesitan otro useState.
  const validatedPercentage =
    order.lines.length === 0 ? 0 : (validatedCount / order.lines.length) * 100;

  // Actualizamos de forma inmutable: copiamos el pedido y el array,
  // y solo creamos una copia nueva de la línea cuyo id coincide.
  const handleAmountChange = (lineId: number, amount: number) => {
    setOrder((previousOrder) => ({
      ...previousOrder,
      lines: previousOrder.lines.map((line) =>
        line.id === lineId ? { ...line, amount } : line,
      ),
    }));
  };

  const canSend =
    order.lines.length > 0 && validatedCount === order.lines.length;

  // Simulación del envío
  const handleSendOrder = () => {
    console.log("Pedido enviado", order);
  };

  const handleValidationChange = (lineIds: number[], validated: boolean) => {
    setOrder((previousOrder) => ({
      ...previousOrder,
      lines: previousOrder.lines.map((line) =>
        lineIds.includes(line.id) ? { ...line, validated } : line,
      ),
    }));
  };

  return (
    <main className="order-page">
      {/* Props para mostrar la cabecera y comunicar la acción de enviar. */}
      <OrderHeader
        order={order}
        total={total}
        percentage={validatedPercentage}
        canSend={canSend}
        onSend={handleSendOrder}
      />
      {/* Los callbacks permiten que el detalle pida cambios al contenedor. */}
      <OrderDetail
        lines={order.lines}
        onAmountChange={handleAmountChange}
        onValidationChange={handleValidationChange}
      />
    </main>
  );
};
