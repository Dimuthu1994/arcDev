import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  ElevationScroll,
  MyButton,
  MyLogo,
  MyTab,
  MyTabs,
  MyMenu,
  MyMenuItem,
  MyDrawerIconContainer,
  MySwipeableDrawer,
  MyListItemButton,
  MyBox,
} from "./Header.elements";

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

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

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (e) => handleClick(e),
    },
    { name: "The Revolution", link: "/revolutions", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contacts", activeIndex: 4 },
  ];

  const menuOption = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customSoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  useEffect(() => {
    [...routes, ...menuOption].forEach((route) => {
      if (
        window.location.pathname === route.link &&
        value !== route.activeIndex
      ) {
        setValue(route.activeIndex);
        if (route.selectedIndex && selectedIndex !== route.selectedIndex) {
          setSelectedIndex(route.selectedIndex);
        }
      }
    });
  }, [value, selectedIndex, menuOption, routes]);

  const tabs = (
    <React.Fragment>
      <MyTabs value={value} textColor="inherit" onChange={handleChange}>
        {routes.map((route, index) => (
          <MyTab
            key={`${route}${index}`}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
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
        keepMounted // better for search engine optization
      >
        {menuOption.map((option, i) => (
          <MyMenuItem
            key={`${option}${i}`}
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
      <MySwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <MyBox />
        <List disablePadding>
          {routes.map((route) => (
            <MyListItemButton
              key={`${route}${route.activeIndex}`}
              component={Link}
              to={route.link}
              divider
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              selected={value === route.activeIndex}
            >
              <ListItemText>{route.name}</ListItemText>
            </MyListItemButton>
          ))}

          <ListItemButton
            sx={{
              backgroundColor: "#f5b427",
            }}
            component={Link}
            to="/estimate"
            divider
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            selected={value === 5}
          >
            <ListItemText>Free Estimate</ListItemText>
          </ListItemButton>
        </List>
      </MySwipeableDrawer>
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
      <AppBar position="sticky" sx={{ zIndex: theme.zIndex.modal + 1 }}>
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
