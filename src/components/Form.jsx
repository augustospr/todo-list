import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ addTodos }) {

  const [text, setText] = useState("");

  const [id, setId] = useState(0);

  const todoHandler = (e) => {
    e.preventDefault();
    const obj = { text: text, id: id };
    addTodos(obj);
    setId(id + 1);
    setText("");
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <form style={{ display: "flex", justifyContent: "center" }} onSubmit={todoHandler}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
          fullWidth
        />
        <Button
          variant="text"
          id="botao-add"
          type="submit"
        >
          ADD
        </Button>
      </form>
    </Paper>
  );
}
