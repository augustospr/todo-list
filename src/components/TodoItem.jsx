import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import EditTodoDialog from "./EditTodoDialog";

export default function TodoItem({ todo, deleteTodos, editTodos }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getId = () => {
    deleteTodos(todo.id);
  }

  return (
    <>
      <EditTodoDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} editTodos={editTodos} todo={todo}/>
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" id="botaoEnter" onClick={getId}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText onClick={handleClickOpen} primary={todo.text} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
