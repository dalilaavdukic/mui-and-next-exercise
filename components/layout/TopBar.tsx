import React, { useContext } from "react";
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from "@mui/material/Badge";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { CustomThemeContext } from "../../providers/CustomThemeContext";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  }),
}));

type TopBarProps = {
  open: boolean,
  onOpen: () => void
}

export default function TopBar({ open, onOpen }: TopBarProps) {
  const theme = useTheme();
  const customThemeContext = useContext(CustomThemeContext)

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    customThemeContext?.onThemeChange(event.target.checked);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          sx={{
            mr: 4.5,
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Lils App
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Default</Typography>
          <Switch checked={customThemeContext?.isCustomSelected}
            onChange={handleThemeChange} inputProps={{ 'aria-label': 'theme selector' }} color="default" />
          <Typography>Custom</Typography>
        </Stack>
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            m: theme.spacing(1.5, 3)
          }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
