import { Grid, TextField, Alert, Box, Paper, Button } from "@mui/material";
import React, { useState } from "react";

import MyKeypad from "./mykeypad";
import myKeys from "../../constants/mykeys";
import MyGrid from "./mygrid";

import useWordle from "../../hooks/useWordle";

function Mywordle() {
  const [guesses, setGuesses] = useState([[...Array(6)]]);
  const [currGuess, setCurrentGuess] = useState("");
  const [isError, setIsError] = useState(false);

  const handleGuess = (event) => {
    if (currGuess.length >= 5) {
      setIsError(true);
      console.log(currGuess);
      const cGuess = currGuess.slice(0, 5);
      setCurrentGuess(cGuess);
    } else {
      setCurrentGuess(event.target.value);
      setIsError(false);
    }
  };

  const onSubmit = () => {
    if (currGuess.length === 5) {
      guesses.push(currGuess);
    } else {
      setIsError(true);
    }
  };

  const Box = (value) => {
    let letters = currGuess.length>1 ? currGuess.split("");

    if (letters.length < 5) {
      while (letters.length !== 5) {
        letters.push(" ");
      }
    }

    return (
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        {letters.map((letter, i) => (
          <Grid item>
            <Paper
              variant="outlined"
              elevation={6}
              style={{
                height: "60px",
                width: "60px",
                textAlign: "center",
              }}
            >
              <h2>{letter}</h2>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid container spacing={5} alignItems="center">
      <Box />
      <Grid item xs={12}>
        <Grid item spacing={2}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Enter you Guess"
            onChange={(event) => handleGuess(event)}
          />
          <Button
            size="large"
            variant="outlined"
            type="submit"
            onSubmit={onSubmit()}
          >
            Enter
          </Button>
        </Grid>

        {isError ? (
          <Alert severity="error">Entered word doesnot have 5 letters!</Alert>
        ) : (
          <span></span>
        )}
      </Grid>
    </Grid>
  );
}

export default Mywordle;
