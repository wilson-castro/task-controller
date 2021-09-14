import React from 'react';

import { Container, Header } from './styles';

import Card from '../Cards/ActivityCard';

function ListTemplate({ title, cards }) {
  return (
    <Container>
      <Header>{title}</Header>
      <div className="Cards">
        {cards.map(card => <Card text={card.text} />)}
      </div>
    </Container>
  )
}

export default ListTemplate;
