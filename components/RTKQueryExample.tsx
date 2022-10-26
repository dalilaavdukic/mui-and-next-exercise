import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useGetUsersQuery } from "../services/api/generated/api";

const RTKQueryExample = () => {
  const { data: users, isSuccess } = useGetUsersQuery();

  useEffect(() => {
    if (isSuccess) {
      console.log(users);
    }
  }, [isSuccess]);

  return (
    <Paper
      elevation={3}
      sx={{ p: (theme) => theme.spacing(3), m: (theme) => theme.spacing(3) }}
    >
      Users will go here
    </Paper>
  );
};

export default RTKQueryExample;
