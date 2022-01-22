import React from "react";
import { MyFooter, MyAdornment, MyGrid } from "./Footer.elements";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <MyFooter>
      <MyGrid
        container
        sx={{ position: "absolute" }}
        justifyContent="center"
        spacing={2}
      >
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid item component={Link} to="/">
              Home
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid item component={Link} to="/services">
              Services
            </MyGrid>
            <MyGrid item component={Link} to="/customsoftware">
              Custom Software Development
            </MyGrid>
            <MyGrid item component={Link} to="/mobileapps">
              Mobile App Development
            </MyGrid>
            <MyGrid item component={Link} to="/websites">
              Website Development
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid item component={Link} to="/revolutions">
              The Revolution
            </MyGrid>
            <MyGrid item component={Link} to="/revolutions">
              Vision
            </MyGrid>
            <MyGrid item component={Link} to="/revolutions">
              Technology
            </MyGrid>
            <MyGrid item component={Link} to="/revolutions">
              Process
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid item component={Link} to="/about">
              About Us
            </MyGrid>
            <MyGrid item component={Link} to="/about">
              History
            </MyGrid>
            <MyGrid item component={Link} to="/about">
              Team
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid item component={Link} to="/contacts">
              Contact Us
            </MyGrid>
          </MyGrid>
        </MyGrid>
      </MyGrid>
      <MyAdornment src={footerAdornment} alt="black decorative slash" />
    </MyFooter>
  );
}

export default Footer;
