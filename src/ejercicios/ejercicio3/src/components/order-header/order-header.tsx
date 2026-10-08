import { Order } from "../../model/order.model";

// Datos que OrderPage pasa a este componente mediante props.
interface Props {
  order: Order;
  total: number;
  percentage: number;
  canSend: boolean;
  onSend: () => void;
}

export const OrderHeader = ({
  order,
  total,
  percentage,
  canSend,
  onSend,
}: Props) => {
  return (
    // Section agrupa la información de cabecera y la relaciona con su título.
    <section className="order-card" aria-labelledby="order-title">
      <h1 id="order-title">Pedido a proveedor</h1>

      <div className="order-metadata">
        {/* Estos datos se muestran */}
        <label className="order-field">
          <span>Número</span>
          <input value={order.number} readOnly />
        </label>
        <label className="order-field order-field--supplier">
          <span>Proveedor</span>
          <input value={order.supplier} readOnly />
        </label>
        <label className="order-field">
          <span>Fecha</span>
          <input type="date" value={order.date} readOnly />
        </label>
      </div>

      <div className="order-summary">
        <label className="order-field">
          <span>Importe total</span>
          <input
            value={`${total.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`}
            readOnly
          />
        </label>

        {/* La barra y el texto representan el porcentaje calculado en OrderPage. */}
        <div className="order-status">
          <span>Estado</span>
          <div
            className="order-status__indicator"
            role="progressbar"
            aria-label="Porcentaje de líneas validadas"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(percentage)}
          >
            <span style={{ width: `${percentage}%` }} />
          </div>
          <strong>{percentage.toFixed(0)}%</strong>
        </div>

        {/* canSend controla si se puede pulsar; onSend contiene la acción. */}
        <button
          className="button button--send"
          type="button"
          disabled={!canSend}
          onClick={onSend}
        >
          Enviar
        </button>
      </div>
    </section>
  );
};
