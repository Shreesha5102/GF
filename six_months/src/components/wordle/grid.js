import React from "react";
import Row from "./row";
import { Grid } from "@mui/material";

export default function Gridle({ guesses, currentGuess, turn }) {
  return (
    <div container spacing={2}>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}
