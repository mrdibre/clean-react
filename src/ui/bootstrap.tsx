import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./config";

function Bootstrap() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>My app</h1>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default Bootstrap;
