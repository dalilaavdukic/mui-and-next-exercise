import React from "react";
import { useGetUsersQuery } from "../services/api/generated/api";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const UserList = () => {
  const { data: users, isSuccess, isFetching } = useGetUsersQuery();

  return (
    <>
      {isFetching && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {isSuccess && (
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemAvatar>
                <Avatar src="/" alt={user.name} />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default UserList;
