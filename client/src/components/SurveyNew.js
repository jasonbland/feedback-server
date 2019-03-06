import React from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends React.Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
    }
    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default connect(
  null,
  null
)(SurveyNew);
