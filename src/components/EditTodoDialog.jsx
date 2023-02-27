import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, handleClose, todo, editTodos }) {

  const [newText, setNewText] = useState(todo.text);

  const sendNewText = () => {
    editTodos(newText, todo.id);
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
            defaultValue={newText}
            type="text"
            onChange={(e) => setNewText(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={sendNewText}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}