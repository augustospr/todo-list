import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  }

  const deleteTodos = (id) => {
    const filtered = todos.filter(item => item.id !== id);
    setTodos(filtered);
  }

  const editTodos = (newText, id) => {
    const newArray = [...todos];
    for (var i in newArray) {
      if (newArray[i].id === id) {
        newArray[i].text = newText;
      }
    }
    setTodos(newArray);
  }

  return (
    <Container maxWidth="md" style={{ marginTop: "1em" }}>

      <Form addTodos={addTodos} />

      <List sx={{ marginTop: "1em" }}>
        {todos.map(todo => (
          <div key={todo.id} style={{ marginTop: "0.7em" }}>
            <TodoItem todo={todo} deleteTodos={deleteTodos} editTodos={editTodos} />
          </div>
        ))}
      </List>

    </Container>
  );
}
