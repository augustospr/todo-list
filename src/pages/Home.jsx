import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [tarefas, setTarefas] = useState([]);

  const criaTarefas = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  }

  const removeTarefa = (id) => {
    const objetoFiltrado = tarefas.filter(item => item.id !== id);
    setTarefas(objetoFiltrado);
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>

      <Form criaTarefas={criaTarefas} />

      <List sx={{ marginTop: "1em" }}>
        {tarefas.map(tarefa => (
          <div key={tarefa.id} style={{ marginTop: "0.7em" }}>
            <TodoItem tarefa={tarefa} removeTarefa={removeTarefa} />
          </div>
        ))}
      </List>

    </Container>
  );
}
