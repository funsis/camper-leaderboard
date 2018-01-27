import React from "react";
import { Grid, Image } from "react-bootstrap";
import logo from "../../img/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <Grid fluid={true} className="header">
      <a href="https://www.freecodecamp.org/">
        <Image src={logo} alt="freeCodeCamp logo" height="40" responsive />
      </a>
    </Grid>
  );
};

export default Header;
