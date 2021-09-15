import React from 'react';

import { Container, Header } from './styles';

import Card from '../Cards/ActivityCard';
import ActionButton from '../template/ActionButton';

function ListTemplate({ title, cards }) {
  return (
    <Container className="CardsGroup">
      <Header>{title}</Header>
      <div className="Cards">
        {cards.map(card => <Card key={card.id} text={card.text} />)}
        <ActionButton />
      </div>
    </Container>
  )
}

export default ListTemplate;
