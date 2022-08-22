import React from "react";
import {
  CssBaseline,
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./output.css";

//
const TaskItem = (props) => {
  const { todo, removeTodo } = props;
  return (
    <div>
      <Grid
        item
        spacing={5}
        lg={12}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          height: "50px",
          mt: "1px",
          backgroundColor: "#fb8500",

          borderRadius: 2,
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        <Grid item className="container-output">
          <div className="todo-text">{props.todo.text}</div>
          <div className="delete">
            <Typography paragraph>
              <AiOutlineCloseCircle
                className="close"
                onClick={() => removeTodo(props.todo.id)}
              />
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskItem;
