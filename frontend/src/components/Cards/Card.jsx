import "../../styles/Card.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { colorCheckBox } from '../../utils/colorCheckBox';
import { convertDateToPhrase } from "../../utils/convertDateToPhrase";

import CardEditor from "./CardEditor";

class Card extends Component {
  state = {
    hover: false,
    editing: false
  };

  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });

  startEditing = () =>
    this.setState({
      hover: false,
      editing: true,
      text: this.props.card.text
    });

  endEditing = () => this.setState({ hover: false, editing: false });

  editCard = async text => {
    // const { card, dispatch } = this.props;

    this.endEditing();

    //update list changing the card text
    // dispatch({
    //   type: "CHANGE_CARD_TEXT",
    //   payload: { cardId: card._id, cardText: text }
    // });
  };

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
                  <div className={`Card-DeadLine ${colorCheckBox(card)}`}>
                    <div className="form-check" onMouseDown={() => console.log(this.props.list)}>
                      <input className="form-check-input" type="checkbox" defaultChecked={card.completed} />
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

export default connect()(Card);
