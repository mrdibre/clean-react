import React from "react";
import { Button as MuiButton } from "@mui/material";

import { ButtonProps } from "./button.types";

export const Button = ({ label, ...props }: ButtonProps) => (
  <MuiButton {...props}>{label}</MuiButton>
);
