import React from 'react';
import { Grid } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <Grid fluid={true}>
      <Header />
      <Footer />
    </Grid>
  );
}

export default App;
