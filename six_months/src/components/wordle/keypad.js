import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Keypad({ keys, usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(keys);
  }, [keys]);

  return (
    <Grid container className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </Grid>
  );
}
