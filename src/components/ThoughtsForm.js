import React, { useState, useRef } from "react";
import { CssBaseline, Button, Grid, Paper, TextField } from "@mui/material";
import ThoughtsItem from "./ThoughtsItem";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// Color Theme
const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#5df56c",
    },
  },
});

// DAte

// getting input
const ThoughtsForm = () => {
  const details = [];

  const [thoughtList, setThoughtsList] = useState(details);
  const dateRef = useRef();
  const thoughtsRef = useRef();
  let dateToday = document.getElementById("date");
  const onFormSubmit = (e) => {
    e.preventDefault();
    let id = 1;
    if (thoughtList.length > 0) {
      id = thoughtList[0].id + 1;
    }
    const thoughtsinfo = {
      id: id,
      date: dateRef.current.value,
      thoughts: thoughtsRef.current.value,
      comepleted: false,
    };
    setThoughtsList([thoughtsinfo, ...thoughtList]);

    let today = new Date();
    let date = `${
      today.getMonth() + 1
    } / ${today.getDate()} / ${today.getFullYear()}`;
    dateToday.textContent = date;
    dateToday.value = date;
    console.log(date);
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
          onSubmit={onFormSubmit}
        >
          Thoughts for the Day
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="date"
                name="date"
                variant="standard"
                fullWidth
                inputRef={dateRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="thoughts"
                label="Thoughts"
                name="thoughts"
                variant="standard"
                fullWidth
                inputRef={thoughtsRef}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Save
              </Button>
            </Grid>
            {/* <ThoughtsItem thoughtsinfo={thoughtsinfo} /> */}
          </Grid>
          {thoughtList.map((thoughtsinfo) => {
            return (
              <ThoughtsItem thoughtsinfo={thoughtsinfo} key={thoughtsinfo.id} />
            );
          })}
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default ThoughtsForm;
