import React, { Component } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import Card from '@material-ui/core/Card';
import TextArea from "react-textarea-autosize";
import Button from '@material-ui/core/Button'

import { StyledActionButton, styles } from "../../styles/ActionButton";

class ActionButton extends Component {

  state = {
    formOpen: false,
    text: ""
  }

  openForm = () => {
    this.setState({ formOpen: true })
  }
  closeForm = () => {
    this.setState({ formOpen: false })
  }

  handleInputChange = event => (
    this.setState({ text: event.target.value })
  )

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Novo Grupo" : "Novo Card";

    return list ?
      (<StyledActionButton
        onClick={this.openForm}
        className="OpenForButtonGroup">
        <p>{buttonText}</p>
        <MdAdd color="rgb(68, 99, 240)" />
      </StyledActionButton>) : <p>hello</p>;
  };

  renderForm = () => {
    const { list } = this.props

    const placeholder = list ? "Digite o nome do grupo..." : "Digite o card..."
    const buttonTitle = list ? "Adicionar lista" : "Adicionar card"

    return <div>
      <Card style={styles.cardStyleContainer}>
        <TextArea
          placeholder={placeholder}
          autoFocus
          onBlur={this.closeForm}
          value={this.state.text}
          onChange={this.handleInputChange}
          style={styles.styleTextArea}
        />
      </Card>
      <div style={styles.formButtonGroup}>
        <Button variant="contained" style={styles.buttonStyleContainer}>
          {buttonTitle}
        </Button>
        <MdClose style={{ marginLeft: 8, cursor: "pointer" }} />
      </div>
    </div>
  }
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default ActionButton;