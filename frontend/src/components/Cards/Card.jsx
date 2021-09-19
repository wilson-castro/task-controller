import "../../styles/Card.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { colorCheckBox } from '../../utils/colorCheckBox';
import { convertDateToPhrase } from "../../utils/convertDateToPhrase";

import AddCard from "./AddCard";
import { removeList, updateList } from "../../store/actions";

class Card extends Component {
  state = {
    hover: false,
    editing: false,
    modalOpen: false,
  };
  openModal = () => {
    this.setState({ modalOpen: true })
  }
  closeModal = () => {
    this.setState({ modalOpen: false })
    this.endEditing();
  }
  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });

  startEditing = () =>
    this.setState({
      hover: false,
      text: this.props.card.text,
    });

  endEditing = () => this.setState({ hover: false });

  editCard = (text, dataDeadline) => {
    const { list: oldList } = this.props
    console.log(oldList);
    console.log(text, dataDeadline);
    console.log(this.props.card);

    // if (text) {
    //   const id = shortid.generate()
    //   const newCard = {
    //     id,
    //     text,
    //     completed: false,
    //     dataDeadline
    //   }
    //   const list = { ...oldList, cards: [...oldList.cards, newCard] }

    //   this.props.updateList({ list })
    // }
    return;
  };

  updateActivityStatus = () => {
    const updateCard = { ...this.props.card, completed: !this.props.card.completed }
    const oldList = this.props.list
    const cardId = updateCard.id

    const oldListCards = [...oldList.cards]
    const updateListCards = oldListCards.map(card => card.id === cardId ? updateCard : card)

    const updatedList = { ...oldList, cards: updateListCards }

    this.props.updateList(updatedList);
  }

  deleteCard = () => {
    if (window.confirm("Deseja realmente deletar essa atividade?")) {
      const card = this.props.card
      const cardDeletedId = card.id
      const { list: oldLists } = this.props
      const { cards: oldCardList } = oldLists

      const filterDeletedCard = card => card.id !== cardDeletedId
      const newCardList = oldCardList.filter(filterDeletedCard)

      const newList = { ...oldLists, cards: newCardList }
      this.props.updateList(newList);

    }
  };

  renderPopup = () => (
    <AddCard
      card={this.props.card}
      close={this.closeModal}
      saveCard={this.editCard}
      placeholder="Digite a atividade"
      deleteCard={this.deleteCard}
    />
  )

  render() {
    const { card, index } = this.props;
    const { hover } = this.state;
    return (
      <Draggable draggableId={`${card.id}`} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="Card"
            onMouseEnter={this.startHover}
            onMouseLeave={this.endHover}
          >
            <div onClick={this.openModal} className="Card-Content-Text"
            >
              <div className="Card-Text">{card.text}</div>
            </div>

            {card.dataDeadline !== "" && (
              <div className="Card-Content-DeadLine"
                onMouseEnter={this.endHover}
                onMouseLeave={this.startHover}
              >
                <div onClick={this.updateActivityStatus}
                  className={`Card-DeadLine ${colorCheckBox(card)}`}>
                  <div className="form-check" >

                    {card.completed ?
                      (<input className="form-check-input" type="checkbox"
                        defaultChecked={true} />) :
                      <input className="form-check-input" type="checkbox"
                        defaultChecked={false} />}

                    <div className="Card-DeadLine-Icon" >
                      <ion-icon name="clock" />
                    </div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      {convertDateToPhrase(card.dataDeadline)}
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div>
              {hover && (
                <div className="Card-Icons" onClick={this.deleteCard}>
                  <div className="Card-Icon">
                    <ion-icon name="trash" />
                  </div>
                </div>
              )}
            </div>

            {this.state.modalOpen ? this.renderPopup() : (false)}

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
export default connect(mapStateToProps, mapDispatchToProps)(Card);
