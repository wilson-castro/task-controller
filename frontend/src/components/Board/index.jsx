import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import '../../styles/Board.css'

import { objEmptyTest } from '../../utils/objEmptyTest';
import List from "../List/List";
import AddList from "../List/AddList";
import { movedList } from '../../store/actions';
// import { Container } from './styles';
// import ActionButton from '../template/ActionButton/';

class Board extends Component {

  state = {
    addingList: false,
  };

  toggleAddingList = () => (
    this.setState({ addingList: !this.state.addingList })
  )

  handleDragEnd = ({ source, destination, type }) => {
    // dropped outside the allowed zones
    if (!destination) return;

    // const { dispatch } = this.props;

    // Move list
    if (type === "COLUMN") {
      // Prevent update if nothing has changed
      if (source.index !== destination.index) {

        console.log(source);
        console.log(destination);

        this.props.movedList({ list1Index: destination.index, list2Index: source.index })

        //update list changing the list position id
        //   dispatch({
        //     type: "MOVE_LIST",
        //     payload: {
        //       oldListIndex: source.index,
        //       newListIndex: destination.index
        //     }
        //   });
      }
      return;
    }

    // Move card
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {

      //update list changing the card position id
      // dispatch({
      //   type: "MOVE_CARD",
      //   payload: {
      //     sourceListId: source.droppableId,
      //     destListId: destination.droppableId,
      //     oldCardIndex: source.index,
      //     newCardIndex: destination.index
      //   }
      // });
    }
  };

  render() {

    const { lists } = this.props
    const { addingList } = this.state
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {(provided, _snapshot) => (
            <div className="Board" ref={provided.innerRef}>
              {lists.map((list, index) => {
                return <List list={list} key={list._id} index={index} />;
              })}

              {provided.placeholder}

              <div className="Add-List">
                {addingList ? (
                  < AddList lastID={lists.length || 0} toggleAddingList={this.toggleAddingList} />
                ) : (
                  <div
                    onClick={this.toggleAddingList}
                    className="Add-List-Button"
                  >
                    Novo Grupo <ion-icon name="add" />
                  </div>
                )}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    movedList: (indexes) => dispatch(movedList(indexes)),
  };
};


const mapStateToProps = state => {

  const objList = state.firestore.data.lists;//CATCH FROM DATABASE
  const objListTested = objEmptyTest(objList) ? {} : objList//SAVE FROM REFRESH OR VOID

  if (!objEmptyTest(objList)) {
    const arraysLists = Object.entries(objListTested)//ARRAY OF FIREBASE ID AND DATA
    const lists = arraysLists.map((arraylist) => ({ ...arraylist[1], _id: arraylist[0] }))//Array data and Firestore id

    return { lists }
  }
  else {
    return { lists: [] };
  }

};

export default compose(
  connect(mapStateToProps, mapDispatchToProps), firestoreConnect((ownProps) => [{
    collection: "lists",
    orderBy: ["index", "asc"]
  },
  ])
)(Board)