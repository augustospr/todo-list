import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [tarefas, setTarefas] = useState([]);

  const adicionaTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
    console.log(tarefa);
  }
  
  const apagaTarefa = (id) => {
    var filtrado = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(filtrado);
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>

      <Form adicionaTarefa={adicionaTarefa} />

      <List sx={{ marginTop: "1em" }}>
        {tarefas.map(tarefa => (
          <div key={tarefa.id} style={{ marginTop: "0.7em" }}>
            <TodoItem tarefa={tarefa} apagaTarefa={apagaTarefa} />
          </div>
        ))}
      </List>

    </Container>
  );
}
