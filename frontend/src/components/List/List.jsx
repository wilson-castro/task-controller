import "../../styles/List.css";

import shortid from "shortid";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Card from "../Cards/Card";
import ListEditor from "./ListEditor";
import AddCard from "../Cards/AddCard/"
import { removeList, updateList } from "../../store/actions";

// import shortid from "shortid";

class List extends Component {
  state = {
    editingTitle: false,
    title: this.props.list.title,
    modalOpen: false,

  };
  openModal = () => {
    this.setState({ modalOpen: true })
  }
  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  addCard = (text, dataDeadline) => {
    const { list: oldList } = this.props

    if (text) {
      const id = shortid.generate()
      const newCard = {
        id,
        text,
        completed: false,
        dataDeadline
      }
      const list = { ...oldList, cards: [...oldList.cards, newCard] }

      this.props.updateList(list)
    }
    return;
  };

  toggleEditingTitle = () =>
    this.setState({ editingTitle: !this.state.editingTitle });

  handleChangeTitle = e => this.setState({ title: e.target.value });

  editListTitle = () => {
    const list = this.props.list;
    const { title } = this.state;

    if (title) {

      list.title = title
      this.setState({ title: "" })

      this.props.updateList(list)
    }
    this.setState({ title: "" })
    this.toggleEditingTitle();

    return;
  };

  deleteList = () => {
    const { list } = this.props;
    if (window.confirm("Tem certeza que deseja remover esse grupo?")) {
      this.setState({ title: "" });
      this.props.updateList(list)
      this.props.removeList(list)

      window.location.reload()
    }

    return;
  };

  renderPopup = () => (
    <AddCard
      close={this.closeModal}
      saveCard={this.addCard}
      placeholder="Digite a atividade"
    />
  )

  render() {
    const { list } = this.props;
    const { index } = this.props
    const { editingTitle, title } = this.state;

    return (
      <Draggable draggableId={list._id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="List"
          >
            {editingTitle ? (
              <ListEditor
                list={list}
                title={title}
                handleChangeTitle={this.handleChangeTitle}
                saveList={this.editListTitle}
                onClickOutside={this.editListTitle}
                deleteList={this.deleteList}
              />
            ) : (
              <div className="List-Title" onClick={this.toggleEditingTitle}>
                {list.title}
              </div>
            )}

            <Droppable droppableId={list._id}>
              {(provided, _snapshot) => (
                <div ref={provided.innerRef} className="Lists-Cards">
                  {list.cards &&
                    list.cards.map((card, index) => (
                      <Card
                        key={card.id}
                        card={card}
                        index={index}
                        list={list}
                      />
                    ))}

                  {provided.placeholder}

                  {this.state.modalOpen ? this.renderPopup() : (false)}
                  <div className="Toggle-Add-Card" onClick={this.openModal}>
                    Nova Atividade <ion-icon name="add" />
                  </div>
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (list) => dispatch(updateList(list)),
    removeList: (list) => dispatch(removeList(list))
  };
};

const mapStateToProps = state => {
  return state
}

// EXPORT COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(List);