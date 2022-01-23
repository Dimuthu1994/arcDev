import { Box, Button, Tab, Tabs, useScrollTrigger } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import React from "react";
import { IconButton } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListItemButton from "@mui/material/ListItemButton";

export function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const MyLogo = styled("img")(({ theme }) => ({
  height: "56px",
  [theme.breakpoints.up("sm")]: {
    height: "64px",
  },
}));
export const MyBox = styled(Box)(({ theme }) => ({
  marginTop: "56px",
  [theme.breakpoints.up("sm")]: {
    marginTop: "64px",
  },
}));

export const MyTabs = styled(Tabs)(({ theme }) => ({
  display: "flex",
  marginLeft: "auto",
}));

export const MyTab = styled(Tab)(({ theme }) => ({
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "0.8rem",
  padding: " 8px",
}));

export const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f5b427",
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  fontFamily: "Pacifico",
  fontSize: "0.8rem",
  textTransform: "none",
  whiteSpace: "nowrap",

  "&:hover": {
    backgroundColor: "#f7c04b",
  },
}));

// Styles apply to menu
// menu created using paper
// styles applies to paper
export const MyMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "0px",
  },
}));

export const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "0.8rem",
  opacity: 0.7,

  "&:hover": {
    opacity: 1,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
  "&.Mui-selected": {
    backgroundColor: "#1f34ad",
  },
}));

export const MyDrawerIconContainer = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: "auto",
  marginRight: "5px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const MySwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export const MyListItemButton = styled(ListItemButton)(({ theme }) => ({
  opacity: 0.7,
  color: "White",
  "&.Mui-selected": {
    backgroundColor: "#1f34ad",
    opacity: 1,
  },
  "&:hover": {
    opacity: 1,
  },
}));
