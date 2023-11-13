import { Button, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Hi Sindhu</h1>
      </Grid>
      <Grid item xs={12}>
        <h2>Lets celebrate 6 months of togetherness</h2>
      </Grid>
      <Grid item xs={12}>
        <h2>Lets play a game</h2>
        <Button variant="outlined" href="wordle">
          Start
        </Button>
      </Grid>
      <Outlet />
    </Grid>
  );
}

export default Home;
