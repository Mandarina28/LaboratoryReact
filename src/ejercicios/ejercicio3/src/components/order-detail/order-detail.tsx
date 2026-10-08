import React from "react";
import { OrderLineModel } from "../../model/order-line.model";
import { OrderLine } from "../order-line/order-line";

interface Props {
  lines: OrderLineModel[];
  onAmountChange: (lineId: number, amount: number) => void;
  onValidationChange: (lineIds: number[], validated: boolean) => void;
}

export const OrderDetail = ({
  lines,
  onAmountChange,
  onValidationChange,
}: Props) => {
  // Este estado es local porque solo se usa para las acciones de esta tabla.
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const handleSelectLine = (lineId: number) => {
    // La forma funcional usa la selección más reciente para añadir o quitar el id.
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(lineId)) {
        return prevSelectedIds.filter((id) => id !== lineId);
      } else {
        return [...prevSelectedIds, lineId];
      }
    });
  };

  const handleSelectedValidationChange = (validated: boolean) => {
    // El padre actualiza el pedido; después limpiamos la selección local.
    onValidationChange(selectedIds, validated);
    setSelectedIds([]);
  };

  return (
    <section className="order-detail" aria-labelledby="order-detail-title">
      <h2 id="order-detail-title" className="visually-hidden">
        Detalle del pedido
      </h2>

      {/* Los botones actúan sobre los ids seleccionados y se deshabilitan si no hay ninguno. */}
      <div
        className="order-actions"
        aria-label="Acciones sobre las líneas seleccionadas"
      >
        <button
          className="button button--primary"
          type="button"
          disabled={selectedIds.length === 0}
          onClick={() => handleSelectedValidationChange(true)}
        >
          Validar
        </button>
        <button
          className="button button--secondary"
          type="button"
          disabled={selectedIds.length === 0}
          onClick={() => handleSelectedValidationChange(false)}
        >
          Invalidar
        </button>
      </div>

      {/* thead es una tabla de html; tbody contiene una fila por cada línea. */}
      <div className="order-table-wrap">
        <table className="order-table">
          <thead>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Seleccionar</span>
              </th>
              <th scope="col">Estado</th>
              <th scope="col">Descripción</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line) => (
              // key ayuda a React a identificar cada fila cuando cambia la lista.
              <OrderLine
                key={line.id}
                line={line}
                onAmountChange={onAmountChange}
                selected={selectedIds.includes(line.id)}
                onSelect={handleSelectLine}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
