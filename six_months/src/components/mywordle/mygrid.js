import { Grid } from "@mui/material";
import React from "react";
import MyRow from "./myrow";

export default function MyGrid({ guesses, currentGuess, turn }) {
  return (
    <Grid container>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <MyRow key={i} currentGuess={currentGuess} />;
        }
        return <MyRow key={i} guess={g} />;
      })}
    </Grid>
  );
}
