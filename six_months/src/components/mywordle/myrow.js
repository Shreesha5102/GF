import { Grid } from "@mui/material";
import React from "react";

export default function MyRow({ guess, currentGuess }) {
  if (guess) {
    return (
      <Grid container spacing={2} className="row">
        {guess.map((letter, i) => {
          return <Grid item>{letter.key}</Grid>;
        })}
      </Grid>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <Grid container spacing={2} className="row">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </Grid>
    );
  }
  return (
    <Grid container spacing={2} className="row">
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
}
