import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ addItem }) {

  const [text, setText] = useState("");

  const [id, setId] = useState(0);

  const sendText = (e) => {
    e.preventDefault();
    const obj = {
      text: text,
      id: id
    }
    setId(id + 1);
    addItem(obj);
    setText("");
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <form style={{ display: "flex", justifyContent: "center" }} onSubmit={sendText}>
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
