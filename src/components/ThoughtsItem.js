import React from "react";
import {
  CssBaseline,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Paper,
  TextField,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./output.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#5df56c",
    },
  },
});
const ThoughtsItem = (props) => {
  return (
    <div>
      <Card sx={{ minWidth: 275, mt: "10px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Date: ${props.thoughtsinfo.date}, `}
          </Typography>
          <Typography variant="h5" component="div">
            {`Thoughts: ${props.thoughtsinfo.thoughts} `}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
      {/* <CssBaseline />
      <Container>
        <Paper className="paper">
          {`Date: ${props.thoughtsinfo.date}, `}
          {`Thoughts: ${props.thoughtsinfo.thoughts} `}
        </Paper>
      </Container> */}
    </div>
  );
};

export default ThoughtsItem;
