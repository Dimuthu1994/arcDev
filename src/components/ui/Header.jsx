import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React, { useState } from "react";
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

const MyTabs = styled(Tabs)(({ theme }) => ({
  display: "flex",
  marginLeft: "auto",
}));

const MyTab = styled(Tab)(({ theme }) => ({
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "0.8rem",
  padding: "8px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
}));

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f5b427",
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  fontFamily: "Pacifico",
  fontSize: "0.8rem",
  textTransform: "none",
}));

function Header(props) {
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <MyLogo alt="company logo" src={logo} />
          <MyTabs value={value} textColor="inherit" onChange={handleChange}>
            <MyTab label="Home" />
            <MyTab label="Services" />
            <MyTab label="The Revolution" />
            <MyTab label="About Us" />
            <MyTab label="Contact Us" />
          </MyTabs>
          <MyButton variant="contained">Free Estimate</MyButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
