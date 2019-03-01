import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Dashboard
        <div className="fixed-action-btn">
          <a href="/" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Dashboard);
