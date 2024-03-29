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

  const saveCard = props.saveCard
  const closeModal = props.close
  const placeholder = props.placeholder
  const title = props.title
  const currentDate = () => (new Date().toISOString().slice(0, 10))

  const card = props.card || { text: "", dataDeadline: `${currentDate()}` }

  const [text, setText] = React.useState(card.text)
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(card.dataDeadline)

  const handleInputChange = (event) => (
    setText(event.target.value)
  )
  const handleDateChange = (event) => (
    setDate(event.target.value)
  )

  React.useEffect(() => {
    handleClickOpen()
  }, [])

  //CONTROLL THE POPUP VISIBILITY
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(closeModal, 100)

  };
  const onClicked = () => {
    saveCard(text, date)
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
              value={date}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true, }}
            />
          </div>
          <div>
            <Card style={styles.cardStyleContainer}>
              <TextArea
                title={title}
                placeholder={placeholder}
                autoFocus
                value={text}
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