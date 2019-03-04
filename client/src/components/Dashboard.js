import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Dashboard
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Dashboard);
