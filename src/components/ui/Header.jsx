import { AppBar, Button, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";

import {
  ElevationScroll,
  MyButton,
  MyLogo,
  MyTab,
  MyTabs,
  MyMenu,
  MyMenuItem,
  MyDrawerIconContainer,
} from "./Header.elements";

function Header(props) {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const menuOption = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customSoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  //Menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  //menu item select
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  //Tabs
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
      setSelectedIndex(0);
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
      setSelectedIndex(1);
    } else if (window.location.pathname === "/mobileapps" && value !== 1) {
      setValue(1);
      setSelectedIndex(2);
    } else if (window.location.pathname === "/websites" && value !== 1) {
      setValue(1);
      setSelectedIndex(3);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
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
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOption.map((option, i) => (
          <MyMenuItem
            key={option}
            component={Link}
            to={option.link}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MyMenuItem>
        ))}
      </MyMenu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        example
      </SwipeableDrawer>
      <MyDrawerIconContainer
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </MyDrawerIconContainer>
    </React.Fragment>
  );

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
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
