import React from "react";
import { MyFooter, MyAdornment, MyGrid } from "./Footer.elements";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Link } from "react-router-dom";

function Footer({ value, setValue, selectedIndex, setSelectedIndex }) {
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
            <MyGrid item component={Link} to="/" onClick={() => setValue(0)}>
              Home
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid
              item
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              Services
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              Custom Software Development
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              Mobile App Development
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              Website Development
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid
              item
              component={Link}
              to="/revolutions"
              onClick={() => setValue(2)}
            >
              The Revolution
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/revolutions"
              onClick={() => setValue(2)}
            >
              Vision
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/revolutions"
              onClick={() => setValue(2)}
            >
              Technology
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/revolutions"
              onClick={() => setValue(2)}
            >
              Process
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              About Us
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              History
            </MyGrid>
            <MyGrid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              Team
            </MyGrid>
          </MyGrid>
        </MyGrid>
        <MyGrid item sx={{ margin: "3em" }}>
          <MyGrid container direction="column" spacing={2}>
            <MyGrid
              item
              component={Link}
              to="/contacts"
              onClick={() => setValue(4)}
            >
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
