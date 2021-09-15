import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from "../List/ActivitiesList";
import { Container } from './styles';
import ActionButton from '../template/ActionButton';

import { loadLists } from '../../backend/services/api';

class Main extends Component {
  render() {
    const lists = loadLists();

    return (
      <main className="Content">
        <Container>
          {lists.map(list => (
            <List key={list.id} title={list.title} cards={list.cards} />
          ))}
          <ActionButton list />
        </Container>
      </main>
    )
  }
}

const mapStateToProps = state => ({ lists: state.lists })

export default connect(mapStateToProps)(Main);