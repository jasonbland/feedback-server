import React from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';

class SurveyNew extends React.Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(SurveyNew);
