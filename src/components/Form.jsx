import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const criandoTarefa = (text) => {
    const objetoTarefa = { texto: text, id: id };
    setId(id + 1);
    props.adicionandoTarefa(objetoTarefa);
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button variant="text" onClick={() => criandoTarefa(text)}> 
          ADD
        </Button>
      </div>
    </Paper>
  );
}
