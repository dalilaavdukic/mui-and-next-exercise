import React from "react";
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from "../Link";
import ListSubheader from "@mui/material/ListSubheader";

const ListItemButton = styled(MuiListItemButton)(
  ({ theme }) => ({
    '&.active': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '& .MuiListItemIcon-root': {
        color: theme.palette.primary.contrastText
      }
    }
  }),
) as typeof MuiListItemButton;

type SideBarItem = {
  label: string,
  icon: JSX.Element,
  link: string
}

type LinkListProps = {
  listItems: SideBarItem[],
  header?: string
}

export default function LinkList({ listItems, header }: LinkListProps) {
  return (
    <List
      subheader={
        header && (
          <ListSubheader inset component="div">
            {header}
          </ListSubheader>
        )
      }>
      {listItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton component={Link} href={item.link}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
