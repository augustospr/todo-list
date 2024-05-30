import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [todos, setTodos] = useState([]);

  const addItem = (data) => {
    setTodos([...todos, data]);
  };

  const deleteItem = (id) => {
    const filtered = todos.filter(item => (item.id !== id));
    setTodos(filtered);
  };

  const editItem = (newText, id) => {
    const newArray = [...todos];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === id) {
        newArray[i].text = newText;
      }
    }
    setTodos(newArray);
  }

  return (
    <Container maxWidth="md" style={{ marginTop: "1em" }}>

      <Form addItem={addItem} />

      <List sx={{ marginTop: "1em" }}>

        {todos.map(item => (
          <div key={item.id} style={{ marginTop: "0.7em" }}>
            <TodoItem item={item} deleteItem={deleteItem} editItem={editItem} />
          </div>
        ))}

      </List>

    </Container>
  );
}
