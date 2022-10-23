import React from "react";
import { styled, Theme, CSSObject } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import LinkList from "./LinkList";
import AssignmentIcon from '@mui/icons-material/Assignment';
import theme from "../../config/defaultTheme";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 16px)`,
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
    overflowX: 'hidden',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    link: "/"
  },
  {
    label: "Orders",
    icon: <ShoppingCartIcon />,
    link: "/orders"
  },
  {
    label: "Customers",
    icon: <GroupIcon />,
    link: "/customers"
  },
  {
    label: "Reports",
    icon: <BarChartIcon />,
    link: "/reports"
  },
  {
    label: "Integrations",
    icon: <LayersIcon />,
    link: "/integrations"
  },
];

const savedReports = [
  {
    label: "Current month",
    icon: <AssignmentIcon />,
    link: "/reports/current-month"
  },
  {
    label: "Last quarter",
    icon: <AssignmentIcon />,
    link: "/reports/last-quarter"
  },
  {
    label: "Year-end sale",
    icon: <AssignmentIcon />,
    link: "/reports/year-end-sale"
  },
]

type SidebarProps = {
  open: boolean,
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <LinkList listItems={sidebarItems} />
      <Divider sx={{
        mb: theme.spacing(1)
      }} />

      <LinkList listItems={savedReports} header="Saved reports" />
    </Drawer>
  )
}
