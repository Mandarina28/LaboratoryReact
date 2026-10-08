import { OrderLineModel } from "../../model/order-line.model";

interface Props {
  line: OrderLineModel;
  onAmountChange: (lineId: number, amount: number) => void;
  selected: boolean;
  onSelect: (lineId: number) => void;
}

export const OrderLine = ({
  line,
  onAmountChange,
  selected,
  onSelect,
}: Props) => {
  return (
    // Cada OrderLine representa un <tr> (fila) dentro del tbody de la tabla.
    <tr className={selected ? "order-table__row order-table__row--selected" : "order-table__row"}>
      <td className="order-table__select-cell">
        {/* Este checkbox selecciona la fila; no cambia el estado de validación. */}
        <input
          type="checkbox"
          checked={selected}
          aria-label={`Seleccionar ${line.product}`}
          onChange={() => onSelect(line.id)}
        />
      </td>
      <td>
        {/* El texto se deriva de line.validated, que actualiza el contenedor. */}
        <span
          className={line.validated ? "line-status line-status--validated" : "line-status"}
        >
          {line.validated ? "Validado" : "Pendiente"}
        </span>
      </td>
      <td>{line.product}</td>
      <td>
        {/* Campo controlado: su valor viene de props y comunica cada cambio al padre. */}
        <label className="amount-field">
          <span className="visually-hidden">Importe de {line.product}</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={line.amount}
            onChange={(event) =>
              onAmountChange(line.id, Number(event.target.value))
            }
          />
          <span>€</span>
        </label>
      </td>
    </tr>
  );
};
