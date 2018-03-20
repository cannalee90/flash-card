import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

import { RenderTextInput } from './../common/DefaultFormWrapper';
import EditorWrapper from './../common/EditorWrapper';

class Form extends Component {
  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return(
      <form onSubmit={handleSubmit} >
        <div>
          <label>Notes</label>
          <div>
            <Field
              name='front'
              component={RenderTextInput}
              className='testInputClass'
            />
          </div>
          <div>
            <Field name='back' component={EditorWrapper} />
          </div>
          <div>
            <button type='submit' disabled={pristine || submitting}>
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