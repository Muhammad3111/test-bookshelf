import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, OutlinedInput } from "@mui/material";

export default function FormCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 36, color: "#151515" }} gutterBottom>
          Sign Up
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <OutlinedInput placeholder="Username" />
        </Box>
      </CardContent>
    </Card>
  );
}
