import { AppBar, Button, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolutions" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contacts" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <Button
            onClick={() => setValue(0)}
            component={Link}
            to="/"
            sx={{ p: 0 }}
            disableRipple
          >
            <MyLogo alt="company logo" src={logo} />
          </Button>
          <MyTabs value={value} textColor="inherit" onChange={handleChange}>
            <MyTab component={Link} to="/" label="Home" />
            <MyTab component={Link} to="/services" label="Services" />
            <MyTab component={Link} to="/revolutions" label="The Revolution" />
            <MyTab component={Link} to="/about" label="About Us" />
            <MyTab component={Link} to="/contacts" label="Contact Us" />
          </MyTabs>
          <MyButton component={Link} to="/estimate" variant="contained">
            Free Estimate
          </MyButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
