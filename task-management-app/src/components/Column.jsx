import React from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";
import './Dashboard.css'
const Column = ({ title, cards, moveCard }) => {
  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item) => moveCard(item.card, item.from, title),
  });

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "400px",
        width: "300px",
        padding: "1rem",
        borderRadius: "8px",
      }}
      className="_userDetail"
    >
      <h3>{title}</h3>
      {cards.map((card) => (
        <Card key={card.id} card={card} from={title} />
      ))}
    </div>
  );
};

export default Column;
