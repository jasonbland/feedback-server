import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div>Dashboard</div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Dashboard);
