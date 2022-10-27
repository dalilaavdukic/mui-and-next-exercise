import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserList from "./UserList";
import RTKCard from "./RTKCard";
import NewPost from "./NewPost";

const RTKQueryExample = () => {
  return (
    <Box display="flex" width="100%">
      <RTKCard title="Get User List:">
        <UserList />
      </RTKCard>
      <RTKCard title="New Post:">
        <NewPost />
      </RTKCard>
    </Box>
  );
};

export default RTKQueryExample;
