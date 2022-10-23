import React from "react";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../../components/Link";

export default function Orders() {
  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom>Orders</Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      </Typography>
      <Button variant="contained" component={Link} noLinkStyle href="/orders/new">
        New Order
      </Button>
    </Box>
  )
}
