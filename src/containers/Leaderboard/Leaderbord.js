import React, { Component } from "react";
import { Grid, Row, Table, Media, Image } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import "./Lederborad.css";

class Leaderboard extends Component {
  componentWillMount() {
    this.props.fetchRecent();
  }

  renderLeaders() {
    if (!this.props.leaders.length)
      return (
        <tr>
          <td colSpan="4" className="leaderboard__loading">
            Loading...
          </td>
        </tr>
      );

    let position = 1;

    return this.props.leaders.map(leader => (
      <tr key={leader.username}>
        <td className="leaderboard__position">{position++}</td>
        <td>
          <a href={`https://www.freecodecamp.org/${leader.username}`}>
            <Image
              src={leader.img}
              className="leaderboard__username-img"
              alt="user avatar"
              rounded
            />
            {leader.username}
          </a>
        </td>
        <td className="leaderboard__points">{leader.recent}</td>
        <td className="leaderboard__points">{leader.alltime}</td>
      </tr>
    ));
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
                <th
                  className="leaderboard__table-sort leaderboard__table-sort--active"
                  onClick={() => this.props.fetchRecent()}
                >
                  Points in past 30 days
                </th>
                <th
                  className="leaderboard__table-sort"
                  onClick={() => this.props.fetchAlltime()}
                >
                  All time points
                </th>
              </tr>
            </thead>
            <tbody>{this.renderLeaders()}</tbody>
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
