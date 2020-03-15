import React, { useState } from "react";
import { Card as SCard } from "semantic-ui-react";

export interface CardProps {
  data: string;
}

const Card: React.SFC<CardProps> = ({ data }) => {
  return (
    <SCard data-testid="card-todo" fluid>
      <SCard.Content data-testid="todo-name">{data}</SCard.Content>
    </SCard>
  );
};

export default Card;
