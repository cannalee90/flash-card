import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { reduxForm } from 'redux-form';
import { 
  editGist,
  fetchGistAll,
} from '../actions/index';

import Form from './form';
import { convertFileToFront } from '../utils/flashcard';
import { isEmptyObj } from '../utils';

class EditCard extends Component {  
  onSubmit = (values) => {
    this.props.editGist(values);
  }

  componentWillMount() {
    if(isEmptyObj(this.props.cards)) {
      this.props.fetchGistAll();
    }
  }

  render() {
    const { cardname } = this.props.match.params;
    const card = this.props.cards[`${cardname}.md`] || {};
    if(isEmptyObj(card)) {
      return null;
    }
    return(
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2 col-lg-8 offset-lg-2'>
              <Form
                form={'editCardForm'}
                onSubmit={this.onSubmit}
                initialValues={{
                  front: convertFileToFront(card.filename),
                  back: card.content,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editGist: (values) => dispatch(editGist(values)),
    fetchGistAll: () => dispatch(fetchGistAll()),
  };
}

function mapStateToProps({card}) {
  return {
    cards: card.cards,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCard))