import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ card, from }) => {
  const [, drag] = useDrag(() => ({
    type: "CARD",
    item: { card, from },
  }));

  return (
    <div
      ref={drag}
      className="_card"
    >
      <strong>{card.title}</strong>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
