import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import EditTodoDialog from "./EditTodoDialog";

export default function TodoItem({ tarefa, removeTarefa, editaTarefa }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditTodoDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} tarefa={tarefa} editaTarefa={editaTarefa} />
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" id="botaoEnter" onClick={() => removeTarefa(tarefa.id)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText onClick={handleClickOpen} primary={tarefa.texto} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
