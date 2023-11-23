import { Button, Grid } from "@mui/material";
import React from "react";

export default function MyKeypad({ myKeys }) {
  return (
    <Grid>
      {myKeys &&
        myKeys.map((key) => {
          return (
            <Button variant="outlined" value={key.value}>
              {key.value}
            </Button>
          );
        })}
    </Grid>
  );
}
