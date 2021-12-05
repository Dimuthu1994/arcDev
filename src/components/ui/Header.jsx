import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React from "react";
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MyLogo = styled("img")(({ theme }) => ({
  height: "56px",
  [theme.breakpoints.up("sm")]: {
    height: "64px",
  },
}));

function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <MyLogo alt="company logo" src={logo} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
