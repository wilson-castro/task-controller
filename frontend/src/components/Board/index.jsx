import '../../styles/Board.css'

import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { firestoreConnect } from "react-redux-firebase";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import List from "../List/List";
import AddList from "../List/AddList";
import { getList, updateList } from '../../store/actions';
import { objEmptyTest } from '../../utils/objEmptyTest';

class Board extends Component {

  state = {
    addingList: false,
  };

  componentWillMount() {
    this.props.getList()
  }

  toggleAddingList = () => (
    this.setState({ addingList: !this.state.addingList })
  )

  handleDragEnd = ({ source, destination, type }) => {
    // dropped outside the allowed zones
    if (!destination) return;

    // Move list
    if (type === "COLUMN") {
      // Prevent update if nothing has changed
      if (source.index !== destination.index) {

        const lists = [...this.props.lists]
        const oldListIndex = source.index
        const list1 = lists[oldListIndex]
        const newListIndex = destination.index
        const list2 = lists[newListIndex]

        list1.index = newListIndex
        list2.index = oldListIndex

        this.props.updateList(list1)
        this.props.updateList(list2)

        return;
      }
      return;
    }

    // Move card
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      const souceListId = source.droppableId
      const destlistId = destination.droppableId
      const oldCardIndex = source.index
      const newCardIndex = destination.index

      // Move within the same list
      if (souceListId === destlistId) {
        const filterList = list => list._id === souceListId
        const list = this.props.lists.filter(filterList)[0]
        const cards = Array.from(list.cards)

        const card1 = list.cards[oldCardIndex]
        const card1Index = cards.indexOf(card1)
        const card2 = list.cards[newCardIndex]
        const card2Index = cards.indexOf(card2)

        const [removedCard] = cards.splice(card1Index, 1);
        cards.splice(card2Index, 0, removedCard);

        list.cards = [...cards]
        this.props.updateList(list);
        return;
      }
      else {
        const filterList1 = list => list._id === souceListId
        const list1 = this.props.lists.filter(filterList1)[0]
        const filterList2 = list => list._id === destlistId
        const list2 = this.props.lists.filter(filterList2)[0]

        const sourceCards = [...list1.cards]
        const [removedCard] = sourceCards.splice(oldCardIndex, 1);
        const destinationCards = [...list2.cards]
        destinationCards.splice(newCardIndex, 0, removedCard);

        list1.cards = [...sourceCards]
        list2.cards = [...destinationCards]

        this.props.updateList(list1);
        this.props.updateList(list2);

      }

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
    updateList: (list) => dispatch(updateList(list)),
    getList: () => dispatch(getList())
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