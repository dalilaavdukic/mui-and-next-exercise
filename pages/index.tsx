import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CounterExample from "../components/CounterExample";
import RTKQueryExample from "../components/RTKQueryExample";

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="h6" component="h2">
        Basic Store Example
      </Typography>
      <CounterExample />

      <Typography variant="h6" component="h2">
        RTK Query Example
      </Typography>
      <RTKQueryExample />
    </Box>
  );
}
