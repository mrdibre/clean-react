import React from "react";
import { RecoilRoot } from "recoil";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./config";

function Bootstrap() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <h1>My app</h1>
        </RecoilRoot>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default Bootstrap;
