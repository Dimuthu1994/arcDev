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
import { Link } from "react-router-dom";

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
            <MyTab component={Link} to="/" label="Home" />
            <MyTab component={Link} to="/services" label="Services" />
            <MyTab component={Link} to="/revolutions" label="The Revolution" />
            <MyTab component={Link} to="/about" label="About Us" />
            <MyTab component={Link} to="/contacts" label="Contact Us" />
          </MyTabs>
          <MyButton variant="contained">Free Estimate</MyButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
