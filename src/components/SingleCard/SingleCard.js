import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card }) {
  return (
    <div className="card">
      <div>
        <img calssName="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.jpg" alt="card back" />
      </div>
    </div>
  );
}
