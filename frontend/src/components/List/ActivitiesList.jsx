import React from 'react';

import { Container, Header } from './styles';

import Card from '../Cards/ActivityCard';

function ListTemplate({ title }) {
  return (
    <Container>
      <Header>{title}</Header>
      <div className="Cards">
        <Card />
      </div>
    </Container>
  )
}

export default ListTemplate;
