import React, { Component } from "react";
import { Grid, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import "./Lederborad.css";

class Leaderboard extends Component {
  componentWillMount() {
    this.props.fetchRecent();
  }

  renderLeaders = () => {

  }

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
            </tbody>
          </Table>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps({ leaders }) {
  return { leaders };
}

export default connect(mapStateToProps, actions)(Leaderboard);
