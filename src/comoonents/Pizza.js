import React from "react";

function Pizza({ data }) {
  return (
    <div className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={data.photoName} alt={data.name} />
      <div className="description">
        <h3 className="name">{data.name}</h3>
        <p className="ingredients">{data.ingredients}</p>
        <p className="price">{data.soldOut ? "SOLD OUT" : data.price + "$"}</p>
      </div>
    </div>
  );
}

export default Pizza;
