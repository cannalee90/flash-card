import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

import { RenderTextInput } from './../common/DefaultFormWrapper';
import EditorWrapper from './../common/EditorWrapper';

class Form extends Component {
  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return(
      <form onSubmit={handleSubmit} >
        <Field
          name='front'
          component={RenderTextInput}
          className='form-control'
          wrapperClassName='form-group mb-3'
          label='Front of Card'
        />
        <Field
          name='Back of card'
          label='Back of Card'
          component={EditorWrapper}
          wrapperClassName='mb-3'
          label='Back of Card'
        />
        <div className='input-group mb-3'>
          <button
            type='submit'
            disabled={submitting || pristine}
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'newcard'
})(Form)

export default Form;