import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [tarefas, setTarefas] = useState([]);

  const adicionadorTarefas = (item) => {
    setTarefas([...tarefas, item]);
   // console.log(texto);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form adicionadorTarefas={adicionadorTarefas} />
      <List sx={{ marginTop: "1em" }}>
        {tarefas.map((item, key) => (
          <div key={key} style={{ marginTop: "0,5em" }}>
            <TodoItem item={item} />
          </div>
        ))}
      </List>
    </Container>
  );
}
