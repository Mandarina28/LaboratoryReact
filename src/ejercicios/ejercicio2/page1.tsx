import React from "react";
import { useCartContext } from "./cart.context";
import { images } from "./images";
import "./gallery.css";

export const Page1 = () => {
  const { toggleItem, isInCart } = useCartContext();
  const cats = images.filter((img) => img.category === "cats");

  return (
    <div>
      <h1>Gatitos 🐱</h1>

      <div className="gallery">
        {cats.map((img) => (
          <div
            key={img.id}
            className={`card ${isInCart(img.id) ? "selected" : ""}`}
          >
            <img src={img.picUrl} alt={img.title} className="card-image" />
            <p className="card-title">{img.title}</p>

            <input
              type="checkbox"
              checked={isInCart(img.id)}
              onChange={() => toggleItem(img.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
