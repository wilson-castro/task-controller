import "../../styles/Card.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { colorCheckBox, checkedBox } from '../../utils/colorCheckBox';
import { convertDateToPhrase } from "../../utils/convertDateToPhrase";

import CardEditor from "./CardEditor";
import { removeList, updateList } from "../../store/actions";

class Card extends Component {
  state = {
    hover: false,
    editing: false,
  };

  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });

  startEditing = () =>
    this.setState({
      hover: false,
      editing: true,
      text: this.props.card.text,
    });

  endEditing = () => this.setState({ hover: false, editing: false });

  editCard = text => {
    // const { card, dispatch } = this.props;

    this.endEditing();

    //update list changing the card text
    // dispatch({
    //   type: "CHANGE_CARD_TEXT",
    //   payload: { cardId: card._id, cardText: text }
    // });
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

  deleteCard = async () => {
    // const { listId, card, dispatch } = this.props;

    if (window.confirm("Are you sure to delete this card?")) {
      //update list deleting this card
      // dispatch({
      //   type: "DELETE_CARD",
      //   payload: { cardId: card._id, listId }
      // });
    }
  };

  render() {
    const { card, index } = this.props;
    const { hover, editing } = this.state;

    if (!editing) {
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
              <div className="Card-Content-Text"
              >
                {hover && (
                  <div className="Card-Icons"
                  >
                    <div className="Card-Icon" onClick={this.startEditing}>
                      <ion-icon name="create" />
                    </div>
                  </div>
                )}
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

            </div>
          )}
        </Draggable>
      );
    } else {
      return (
        <CardEditor
          text={card.text}
          onSave={this.editCard}
          onDelete={this.deleteCard}
          onCancel={this.endEditing}
        />
      );
    }
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
