import * as React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextArea from "react-textarea-autosize";
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


import { styles } from "./styles";

export default function AddCard(props) {

  const { handleInputChange, handleDateChange } = props.onChange
  const { valueText, valueDate } = props.value
  const { closeForm, clearInputs } = props.close

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
    clearInputs();
    setTimeout(closeForm, 100)

  };
  const onClicked = () => {
    props.saveCard()
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} >
      <div style={styles.content}>
        <DialogTitle style={styles.title}>Nova Atividade</DialogTitle>
        <DialogContent  >
          <div>
            <TextField id="date" label="Data de Entrega"
              type="date"
              value={valueDate}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true, }}
            />
          </div>
          <div>
            <Card style={styles.cardStyleContainer}>
              <TextArea
                placeholder={props.placeholder}
                autoFocus
                value={valueText}
                onChange={handleInputChange}
                style={styles.styleTextArea}
              />
            </Card>
          </div>

        </DialogContent>
        <DialogActions>
          <Button style={styles.dialogActions} onClick={handleClose}>Cancelar</Button>
          <Button style={styles.dialogActions} onClick={onClicked}>Salvar</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}