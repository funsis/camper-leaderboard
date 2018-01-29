import React, { Component } from "react";
import { Grid, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import "./Lederborad.css";

class Leaderboard extends Component {
  componentWillMount() {
    this.props.fetchRecent();
  }

  renderLeaders() {
   if (!this.props.leaders.length) return (
     <tr>
       <td colSpan="4" className="table__loading">Loading...</td>
     </tr>
   );

   let number = 1;

    return this.props.leaders.map(leader => (
        <tr key={leader.username}>
          <td>{number++}</td>
          <td>
            <img src={leader.img} alt="user avatar" width="40" height="40" />
            {leader.username}
          </td>
          <td className="table__points">{leader.recent}</td>
          <td className="table__points">{leader.alltime}</td>
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
                <th className="leaderboard__table-sort leaderboard__table-sort--active" onClick={() => this.props.fetchRecent()}>
                  Points in past 30 days
                </th>
                <th className="leaderboard__table-sort" onClick={() => this.props.fetchAlltime()}>All time points</th>
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
