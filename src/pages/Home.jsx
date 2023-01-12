import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [tarefas, setTarefas] = useState([]);

  const adicionandoTarefa = (item) => {
    setTarefas([...tarefas, item]);
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form adicionandoTarefa={adicionandoTarefa} />
      <List sx={{ marginTop: "1em" }}>
        {tarefas.map((item) => (
          <div style={{ marginTop: "0,5em" }}>
           <TodoItem item={item}/>
          </div>
        ))}
      </List>
    </Container>
  );
}
