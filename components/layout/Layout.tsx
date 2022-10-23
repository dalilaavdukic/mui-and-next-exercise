import React, { useState } from "react";
import Box from '@mui/material/Box';
import Sidebar, { DrawerHeader } from "./Sidebar";
import TopBar from "./TopBar";

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar open={open} onOpen={handleDrawerOpen} />
      <Sidebar open={open} onClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}
