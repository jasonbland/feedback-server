import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>Header</div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Header);
