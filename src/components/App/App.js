import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Leaderboard from "../../containers/Leaderboard/Leaderbord";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default App;
