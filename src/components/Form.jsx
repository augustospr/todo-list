import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ adicionaTarefa }) {

  const [texto, setTexto] = useState("");

  const [id, setId] = useState(0);

  const objetoTarefa = (e) => {
    e.preventDefault();
    const objeto = { texto: texto, id: id };
    setId(id + 1);
    adicionaTarefa(objeto);
    setTexto("");
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <form style={{ display: "flex", justifyContent: "center" }} onSubmit={objetoTarefa}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setTexto(e.target.value)}
          value={texto}
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
