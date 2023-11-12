import { Button, Grid } from "@mui/material";
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
        <Button variant="outlined" href="/err">
          Link
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
