import { Button } from "@mui/material";
import React from "react";

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!!!</h1>
          <h2 className="solution">{solution}</h2>
          <h2>You found the word in {turn} guesses</h2>
          <Button variant="outlined" href="/">
            Next
          </Button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Unlucky!</h1>
          <h2 className="solution">{solution}</h2>
          <h2>Better luck next time {solution}</h2>
          <Button variant="outlined" href="/">
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
