import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { objEmptyTest } from '../../utils/objEmptyTest';
import List from "../List/ActivitiesList";
import { Container } from './styles';
import ActionButton from '../template/ActionButton/';

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
  const objList = state.firestore.data.lists;//CATCH FROM DATABASE
  const objListTested = objEmptyTest(objList) ? {} : objList//SAVE FROM REFRESH OR VOID

  if (!objEmptyTest(objList)) {
    const arraysLists = Object.entries(objListTested)//ARRAY OF FIREBASE ID AND DATA
    const lists = arraysLists.map((arraylist) => ({ ...arraylist[1] }))

    return { lists }
  } else {

    return { lists: [] };
  }

};

export default compose(
  connect(mapStateToProps), firestoreConnect((ownProps) => [{
    collection: "lists",
    orderBy: ["id", "asc"]
  },
  ])
)(Main)