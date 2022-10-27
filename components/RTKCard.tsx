import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

type Props = {
  children: JSX.Element;
  title: string;
};

const RTKCard = ({ children, title }: Props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: (theme) => theme.spacing(3),
        m: (theme) => theme.spacing(3),
        width: "50%",
      }}
    >
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default RTKCard;
