import React from 'react';
import Card from '@material-ui/core/Card';
import TextArea from "react-textarea-autosize";

import { styles } from "./styles";
function AddGroup(props) {

  const OnBlur = () => {
    const { closeForm, clearInputs } = props.close
    closeForm()
    clearInputs()
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <Card style={styles.cardStyleContainer}>
        <TextArea
          placeholder={props.placeholder}
          autoFocus
          onBlur={OnBlur}
          value={props.value}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          style={styles.styleTextArea}
        />
      </Card>
    </div>
  )
}

export default AddGroup;