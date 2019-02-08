import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Feedback</a>
          <ul className="right">
            <li>
              <a>Google Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  null
)(Header);
