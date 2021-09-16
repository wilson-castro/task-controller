import React from 'react';
import Card from '@material-ui/core/Card';
import TextArea from "react-textarea-autosize";

import { styles } from "../../styles/ButtonStyles";
function AddGroupButton(props) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Card style={styles.cardStyleContainer}>
        <TextArea
          placeholder={props.placeholder}
          autoFocus
          onBlur={props.onBlur}
          value={props.value}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          style={styles.styleTextArea}
        />
      </Card>
    </div>
  )
}

export default AddGroupButton;