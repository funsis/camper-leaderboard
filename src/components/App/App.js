import React from 'react';
import { Grid } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <Grid fluid={true} className="app">
      <Header />
      <Footer />
    </Grid>
  );
}

export default App;
