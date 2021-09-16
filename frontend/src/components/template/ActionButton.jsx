import React, { Component } from "react";
import styled from 'styled-components';

import { MdAdd } from "react-icons/md";

import AddCardPopup from "./AddCardPopup";
import AddGroupButton from "./AddGroupButton";

class ActionButton extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
  state = {
    formOpen: false,
    modalOpen: false,
    text: "",
  }

  //CACTHER KEY
  keyHandler(event) {
    if (event.key === 'Enter') {
      console.log(this.state.text);
    } else if (event.key === 'Escape') {

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

  //ADD BUTTON CARD OR GRUP
  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Novo Grupo" : "Novo Card";

    //CHECK IF DO ADD GROUP/LIST OR CARD
    return (
      //ADD GROUP/LIST  OR CARDS
      <StyledAddButton
        onClick={this.openForm}
        className="OpenForButtonGroup">
        <p>{buttonText}</p>
        <MdAdd color="rgb(68, 99, 240)" />
      </StyledAddButton>)

  }

  renderForm = () => {
    const { list } = this.props

    //Check for set the text
    const placeholder = list ? "Digite o nome do grupo..." : "Digite o card..."
    const buttonTitle = list ? "Salvar" : "Adicionar card"

    //Test if do add a group or add a card
    return list ? (
      <AddGroupButton
        placeholder={placeholder}
        onBlur={this.closeForm}
        value={this.state.text}
        onChange={this.handleInputChange}
        onKeyUp={this.keyHandler}
        buttonTitle={buttonTitle} />
    ) : (
      <AddCardPopup placeholder={placeholder}
        onBlur={this.closeForm}
        value={this.state.text}
        onChange={this.handleInputChange}
      />
    )
  }
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

// STYLED COMPONENTS
const StyledAddButton = styled.div`

  display: flex;
  align-items: center;

  height: 36px;
  width: 240px;
  margin-top: 1rem;
  padding: 1.5rem;

  cursor: pointer;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3.5px; 

  background-color: rgb(239, 237, 238);
  color: rgb(68, 99, 240);
  font-weight: 500; 

  min-height: 32px;

  transition: background-color 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;

  :hover,:focus{
    background-color: rgb(229, 227, 218);
  }
  :focus{
      outline: none;
  }
  :active{
    transform: scale(95%);
  }

  p{ margin: 0}
`;
// END STYLED COMPONENTS


// EXPORT COMPONENT
export default ActionButton;