import React from 'react';
import { connect } from 'react-redux';

class Landing extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Surveys</h1>
        Collect feedback from users
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Landing);
