import { Button, Tab, Tabs, useScrollTrigger } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React from "react";

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

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
}));

export const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f5b427",
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  fontFamily: "Pacifico",
  fontSize: "0.8rem",
  textTransform: "none",
}));
