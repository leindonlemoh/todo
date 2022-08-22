import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import ThoughtsForm from "./components/ThoughtsForm";
import ThoughtsItem from "./components/ThoughtsItem";
import "./style.css";
import {
  Typography,
  AppBar,
  CssBaseline,
  Container,
  Toolbar,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

// task
const App = () => {
  const [todos, setTask] = useState([]);
  const addTask = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, comepleted: false };
    let newTask = [todo, ...todos];
    console.log(newTask);
    setTask(newTask);
  };
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTask(updatedTodos);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Thoughts and Task</Typography>
        </Toolbar>
      </AppBar>
      <Container className="App">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <ThoughtsForm />
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <TaskForm addTask={addTask} />

              {todos.map((todo) => {
                return (
                  <TaskItem removeTodo={removeTodo} todo={todo} key={todo.id} />
                );
              })}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
