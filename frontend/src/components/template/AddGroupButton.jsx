import React from 'react';
import Card from '@material-ui/core/Card';
import TextArea from "react-textarea-autosize";
import Button from '@material-ui/core/Button'

import { styles } from "../../styles/ButtonStyles";
function AddGroupButton(props) {
  return (
    <div>
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
      <div style={styles.formButtonGroup}>
        <Button variant="contained" style={styles.buttonStyleContainer}>
          {props.buttonTitle}
        </Button>
      </div>
    </div>
  )
}

export default AddGroupButton;