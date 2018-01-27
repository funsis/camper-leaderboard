import React from "react";
import { Grid } from "react-bootstrap";
import "./Fotter.css";

const Footer = () => {
  return (
    <Grid fluid={true} className="footer">
      By <a href="https://github.com/funsis" className="footer__copyright">@funsis</a>
    </Grid>
  );
};

export default Footer;
