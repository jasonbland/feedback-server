import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'surveyTitle' },
  { label: 'Subject Line', name: 'surveyTitle' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends React.Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return <Field component={SurveyField} type="text" label={label} name={name} key={name} />;
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="blue btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
