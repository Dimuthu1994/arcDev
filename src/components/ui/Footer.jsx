import React from "react";
import { MyFooter, MyAdornment } from "./Footer.elements";
import footerAdornment from "../../assets/Footer Adornment.svg";

function Footer(props) {
  return (
    <MyFooter>
      <MyAdornment src={footerAdornment} alt="black decorative slash" />
    </MyFooter>
  );
}

export default Footer;
