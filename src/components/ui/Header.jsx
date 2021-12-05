import { AppBar, Toolbar } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  ElevationScroll,
  MyButton,
  MyLogo,
  MyTab,
  MyTabs,
} from "./Header.elements";

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
