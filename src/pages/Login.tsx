import React from "react";
import FormCard from "../components/login";
import { Box } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <FormCard />
    </Box>
  );
}
