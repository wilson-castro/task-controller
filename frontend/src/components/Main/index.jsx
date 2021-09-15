import React from 'react';

import List from "../List/ActivitiesList";
import { StyledMain } from './styles';

function Main(props) {
  const { lists } = props;

  return (
    <StyledMain className="Content">
      {lists.map(list => (
        <List key={list.id} title={list.title} cards={list.cards} />
      ))}
    </StyledMain >
  )
}


export default (Main);