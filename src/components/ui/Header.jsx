import { AppBar, Button, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  ElevationScroll,
  MyButton,
  MyLogo,
  MyTab,
  MyTabs,
  MyMenu,
  MyMenuItem,
} from "./Header.elements";

function Header(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuOption = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customSoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];
  //Menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  //menu item select
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  //Tabs
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
    } else if (window.location.pathname === "/customSoftware" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/mobileapps" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/websites" && value !== 1) {
      setValue(1);
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
            <MyTab
              component={Link}
              to="/services"
              label="Services"
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? "true" : undefined}
              onMouseOver={(e) => handleClick(e)}
            />
            <MyTab component={Link} to="/revolutions" label="The Revolution" />
            <MyTab component={Link} to="/about" label="About Us" />
            <MyTab component={Link} to="/contacts" label="Contact Us" />
          </MyTabs>
          <MyButton component={Link} to="/estimate" variant="contained">
            Free Estimate
          </MyButton>

          <MyMenu
            id="simple-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            elevation={0}
          >
            {menuOption.map((option, i) => {
              return (
                <MyMenuItem
                  key={i}
                  onClick={(e) => {
                    handleClose();
                    setValue(1);
                    handleMenuItemClick(e, i);
                  }}
                  component={Link}
                  to={option.link}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MyMenuItem>
              );
            })}
          </MyMenu>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
