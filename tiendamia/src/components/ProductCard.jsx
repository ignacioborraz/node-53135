import React from "react";

export default function ProductCard({ image, title, price }) {
  return (
    <article className="bg-green-100 h-[350px] w-[400px] m-4">
      <img
        className="h-[250px] w-full object-cover"
        src={image}
        alt=""
      />
      <h3>{title}</h3>
      {price}
      <button className="bg-white p-2 m-2">BUY</button>
    </article>
  );
}
