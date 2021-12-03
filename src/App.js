import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "../public/img/1.png" },
  { src: "../public/img/2.png" },
  { src: "../public/img/3.png" },
  { src: "../public/img/4.png" },
  { src: "../public/img/5.png" },
  { src: "../public/img/6.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  function shuffleCards() {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  }

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
