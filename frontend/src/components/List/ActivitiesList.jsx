import React from 'react';

import { Container, Header } from './styles';

import Card from '../Cards/ActivityCard';
import ActionButton from '../template/ActionButton';

function ListTemplate({ title, cards, list }) {
  return (
    <Container className="CardsGroup">
      <Header>{title}</Header>
      <div className="list-cards">
        {cards.map(card => <Card key={card.id} card={card} />)}
        <ActionButton listObj={list} />
      </div>
    </Container>
  )
}

export default ListTemplate;
