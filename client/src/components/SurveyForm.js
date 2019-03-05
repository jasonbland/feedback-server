import React from 'react';
import { reduxForm, Field } from 'redux-form';
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
