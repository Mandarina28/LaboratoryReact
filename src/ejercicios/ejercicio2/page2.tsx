import React from "react";
import { useCartContext } from "./cart.context";
import { images } from "./images";
import "./gallery.css";

export const Page2 = () => {
  const { toggleItem, isInCart } = useCartContext();
  const dogs = images.filter((img) => img.category === "dogs");

  return (
    <div>
      <h1>Puppies 🐶</h1>

      <div className="gallery">
        {dogs.map((img) => (
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
