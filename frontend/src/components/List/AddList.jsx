import "../../styles/AddList.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import ListEditor from "./ListEditor";

import { addList } from "../../store/actions";

class AddList extends Component {
  state = {
    title: ""
  };

  handleChangeTitle = e => this.setState({ title: e.target.value });

  createList = () => {
    const { title } = this.state;
    const index = this.props.lastID

    this.props.toggleAddingList();
    if (title) {
      this.props.addList({ title, index, })
    }
  };

  render() {
    const { toggleAddingList } = this.props;
    const { title } = this.state;

    return (
      <div className="Add-List-Editor">
        <ListEditor
          title={title}
          handleChangeTitle={this.handleChangeTitle}
          onClickOutside={toggleAddingList}
          saveList={this.createList}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (list) => dispatch(addList(list)),
  };
};

// EXPORT COMPONENT
export default connect(null, mapDispatchToProps)(AddList);
