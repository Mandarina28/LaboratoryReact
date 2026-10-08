import React from "react";
import { useCartContext } from "./cart.context";

import { images } from "./images";
import "./cart.css";

export const Cart = () => {
  const { cart, toggleItem } = useCartContext();

  return (
    <div className="cart">
      <h2>Carrito 🛒</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((id) => {
          const image = images.find((img) => img.id === id);
          if (!image) return null;

          return (
            <div key={id} className="cart-item">
              <p>🐱 {image.title}</p>
              <button onClick={() => toggleItem(id)}>❌</button>
            </div>
          );
        })
      )}
    </div>
  );
};
