import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

import EditorWrapper from './../common/editor-wrapper';

class Form extends Component {
  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return(
      <form onSubmit={handleSubmit} >
        <div>
          <label>Notes</label>
          <div>
            <Field name="test" component={EditorWrapper} />
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
  form: 'newcard'
})(Form)

export default Form;