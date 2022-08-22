import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#fc7a1e",
    },
  },
});
const TaskForm = (props) => {
  const [input, setInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.addTask(input);
    setInput("");
  };
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <Paper
          variant="outlined"
          component="form"
          sx={{
            my: 6,
            p: 3,
          }}
          onSubmit={submit}
        >
          Task
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={input}
                variant="standard"
                onChange={(e) => setInput(e.target.value)}
                className="task-input"
                label="Add a Task"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                type="submit"
                className="task-button"
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default TaskForm;
