import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import TextArea from "react-textarea-autosize";

import { styles } from "../../styles/ButtonStyles";

export default function AddCardPopup(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    handleClickOpen()
  }, [])

  //CONTROLL THE POPUP VISIBILITY
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(props.onBlur, 100)

  };
  const onClicked = () => {
    props.saveCard()
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} >
      <div style={styles.stylePopup.content}>
        <DialogTitle style={styles.stylePopup.title}>Nova Atividade</DialogTitle>
        <DialogContent  >
          <Card style={styles.cardStyleContainer}>
            <TextArea
              placeholder={props.placeholder}
              autoFocus
              value={props.value}
              onChange={props.onChange}
              style={styles.styleTextArea}
            />
          </Card>
        </DialogContent>
        <DialogActions>
          <Button style={styles.stylePopup.dialogActions} onClick={handleClose}>Cancelar</Button>
          <Button style={styles.stylePopup.dialogActions} onClick={onClicked}>Salvar</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}