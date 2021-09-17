import React, { Component } from "react";
import { connect } from "react-redux";
import { addList, updateList } from "../../../store/actions";

import { MdAdd } from "react-icons/md";

import AddCard from "../popupAddCard/";
import AddGroup from "../inputAddGroup/";
import StyledAddButton from "../StyledAddButton"

class ActionButton extends Component {

  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
  state = {
    formOpen: false,
    modalOpen: false,
    text: "",
    dataDeadline: ""
  }

  // CLEAR INPUTS
  clearInputs = () => {
    this.setState({ text: "" })
    return;
  }

  //CACTHER KEY
  keyHandler(event) {
    if (event.key === 'Enter') {
      this.handleAddList()
    }

  }

  //MODAL STATE
  openForm = () => {
    this.setState({ formOpen: true })
  }
  closeForm = () => {
    this.setState({ formOpen: false })
  }
  openModal = () => {
    this.setState({ modalOpen: true })
  }
  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  //CHANGE THE INPUT CONTROLLED COMPONENT
  handleInputChange = event => (
    this.setState({ text: event.target.value })
  )
  // CHANGE THE DATE INPUT CONTROLLED COMPONENT
  handleDateChange = event => (
    this.setState({ dataDeadline: event.target.value })
  )

  //ADD A CARD/UPDATE_LIST AND ADD A LIST
  handleAddList = () => {
    const { text } = this.state;
    const id = this.props.list.length || 0
    if (text) {
      this.props.addList({ text, id, })
      this.closeForm()
      this.clearInputs()
    }
    return;
  }
  handleAddCard = () => {
    const { listObj: oldList } = this.props
    const { text } = this.state
    const { dataDeadline } = this.state

    if (text) {
      const id = oldList.cards.length || 0
      const newCard = {
        id,
        text,
        completed: false,
        dataDeadline: dataDeadline
      }
      const list = { ...oldList, cards: [...oldList.cards, newCard] }

      this.props.updateList({ list, newCard })
      this.clearInputs()
    }
    return;
  }

  //ADD BUTTON CARD OR GRUP
  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Novo Grupo" : "Novo Card";

    //CHECK IF DO ADD GROUP/LIST OR CARD
    return (
      //ADD GROUP/LIST  OR CARDS
      <StyledAddButton
        style={list ?
          { border: "1px solid rgb(221, 221, 221)" }
          : {}}
        onClick={this.openForm}
        className="OpenForButtonGroup" >
        <p>{buttonText}</p>
        <MdAdd color="rgb(68, 99, 240)" />
      </StyledAddButton>)

  }

  renderForm = () => {
    const { list } = this.props
    //Check for set the text
    const placeholder = list ? "Digite o nome do grupo..." : "Digite a atividade..."
    const buttonTitle = list ? "Salvar" : "Adicionar card"

    //Test if do add a group or add a card
    return list ? (
      <AddGroup
        placeholder={placeholder}
        close={{ closeForm: this.closeForm, clearInputs: this.clearInputs }}
        value={this.state.text}
        onChange={this.handleInputChange}
        onKeyUp={this.keyHandler}
        buttonTitle={buttonTitle}
      />
    ) : (
      <AddCard placeholder={placeholder}
        close={{ closeForm: this.closeForm, clearInputs: this.clearInputs }}
        value={{ valueText: this.state.text, valueDate: this.state.dataDeadline }}
        onChange={{
          handleInputChange: this.handleInputChange,
          handleDateChange: this.handleDateChange
        }}
        saveCard={this.handleAddCard}
      />
    )
  }
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (list) => dispatch(addList(list)),
    updateList: (list) => dispatch(updateList(list))
  };
};

// EXPORT COMPONENT
export default connect(null, mapDispatchToProps)(ActionButton);