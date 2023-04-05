import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (id) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  }

  const editTodo = (newText, id) => {
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

      <Form addTodo={addTodo} />

      <List sx={{ marginTop: "1em" }}>

        {todos.map(todo => (
          <div key={todo.id} style={{ marginTop: "0.7em" }}>
            <TodoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
          </div>
        ))}

      </List>

    </Container>
  );
}
