
import React from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector, useAppDispatch } from "../services/store";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { decrement, increment, selectCount } from "../services/store/counterSlice";

const CounterExample = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Paper elevation={3} sx={{p: (theme) => theme.spacing(3), m: (theme) => theme.spacing(3)}}>
    <Typography paragraph>
      {count}
    </Typography>
    <Button variant="contained" onClick={() => dispatch(increment())}>+</Button>
    <Button variant="outlined" onClick={() => dispatch(decrement())}>-</Button>
  </Paper>
  );
};

export default CounterExample;
