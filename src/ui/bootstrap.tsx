import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme } from "./config";
import { WelcomePage } from "./pages";

function Bootstrap() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<WelcomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default Bootstrap;
