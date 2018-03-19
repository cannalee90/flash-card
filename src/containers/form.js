import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class Form extends Component {
  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return(
      <form onSubmit={handleSubmit} >
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'contact'
})(Form)

export default Form;