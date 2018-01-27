import React from "react";
import { Grid } from "react-bootstrap";
import "./Fotter.css";

const Footer = () => {
  return (
    <Grid fluid={true} className="footer">
      <a href="https://github.com/funsis" className="footer__copyright">by Funsis</a>
    </Grid>
  );
};

export default Footer;
