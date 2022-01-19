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

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";

const MyMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "0px",
  },
}));

const MyMenuItem = styled(MenuItem)(({ theme }) => ({
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
}));

function Header(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  //Menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
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
          >
            <MyMenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/services"
            >
              Services
            </MyMenuItem>
            <MyMenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/customSoftware"
            >
              Custom Software Development
            </MyMenuItem>
            <MyMenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/mobileapps"
            >
              Mobile App Development
            </MyMenuItem>
            <MyMenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/websites"
            >
              Website Development
            </MyMenuItem>
          </MyMenu>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
