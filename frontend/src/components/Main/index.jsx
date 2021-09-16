import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import List from "../List/ActivitiesList";
import { Container } from './styles';
import ActionButton from '../template/ActionButton';

class Main extends Component {
  render() {
    return (
      <main className="Content1">
        <Container>
          {this.props.lists && this.props.lists.map(list => (
            <List key={list.id} listID={list.id} title={list.title} cards={list.cards} list={list} />
          ))}
          <ActionButton list={this.props.lists} />
        </Container>
      </main>
    )
  }
}

const mapStateToProps = state => {
  const lists = state.firestore.ordered.lists;
  return { lists: lists };
};

export default compose(
  connect(mapStateToProps), firestoreConnect((ownProps) => [{
    collection: "lists",
    orderBy: ["id", "asc"]
  },
  ])
)(Main)