import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice }) {
  function handleClick() {
    handleChoice(card);
  }

  return (
    <div className="card">
      <div>
        <img calssName="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.jpg"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
