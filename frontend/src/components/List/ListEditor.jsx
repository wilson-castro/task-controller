import "../../styles/ListEditor.css";

import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";

class ListEditor extends Component {
  ref = React.createRef();

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.saveList();
    }
  };

  render() {
    const { title, handleChangeTitle, deleteList, onClickOutside } = this.props;

    return (
      <div className="List-Title-Edit" ref={this.ref}>
        <TextareaAutosize
          onBlur={onClickOutside}
          autoFocus
          className="List-Title-Textarea"
          placeholder="Digite o nome do grupo..."
          value={title}
          onChange={handleChangeTitle}
          onKeyDown={this.onEnter}
          style={{ width: deleteList ? 220 : 245 }}
        />
        {deleteList && <ion-icon name="trash" onClick={deleteList} />}
      </div>
    );
  }
}

export default ListEditor;
