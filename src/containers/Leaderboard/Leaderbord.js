import React, { Component } from "react";
import { Grid, Row, Table } from "react-bootstrap";
import "./Lederborad.css";

class Leaderboard extends Component {
  render() {
    return (
      <Grid className="leaderboard">
        <Row className="leaderboard__title">
          <h3>Leaderboard</h3>
        </Row>
        <Row>
          <Table striped bordered className="leaderboard__table">
            <thead>
              <tr>
                <th className="leaderboard__table-number">#</th>
                <th>Camper Name</th>
                <th className="leaderboard__table-sort leaderboard__table-sort--active">Points in past 30 days</th>
                <th className="leaderboard__table-sort">All time points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Funsis</td>
                <td>100</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Darion</td>
                <td>10</td>
                <td>100</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Grid>
    );
  }
}

export default Leaderboard;
