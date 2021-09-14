import React from 'react';

import List from "../List/ActivitiesList";
import { StyledMain } from './styles';

function Main(props) {
  const { lists } = props;

  return (
    <StyledMain>
      {lists.map(list => (
        <List title={list.title} cards={list.cards} />
      ))}
    </StyledMain >
  )
}


export default (Main);