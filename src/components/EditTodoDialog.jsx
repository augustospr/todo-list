import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, handleClickOpen, handleClose, tarefa, editaTarefa }) {

  const [trocaTarefa, setTrocaTarefa] = useState(tarefa.texto);

  const editaTexto = () => {
    editaTarefa(tarefa.id, trocaTarefa);
    handleClose();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Editar tarefa</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            defaultValue={trocaTarefa}
            type="text"
            onChange={(e) => setTrocaTarefa(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={editaTexto}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}