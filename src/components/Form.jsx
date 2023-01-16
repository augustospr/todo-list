import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ adicionaTarefa }) {

  const [texto, setTexto] = useState("");

  const [id, setId] = useState(0);

  const objetoTarefa = (texto) => {
    const objeto = {texto: texto, id: id};
    setId(id + 1);
    adicionaTarefa(objeto);
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setTexto(e.target.value)}
          fullWidth
        />
        <Button variant="text"
          onClick={() => { objetoTarefa(texto) }}
        >
          ADD
        </Button>
      </div>
    </Paper>
  );
}
