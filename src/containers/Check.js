import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchGistAll } from '../actions';
import { shuffleArray } from '../utils';
import CardPresentation from '../components/CardPresentation';


class Check extends Component {

  componentDidMount() {
    this.props.fetchGistAll();   
  }

  render() {
    return (
      <CardPresentation
        cards={shuffleArray(this.props.cards)}
      />
    )
  }
}

function mapStateToProps({card}) {
  return {
    cards: card.cards || {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGistAll: () => dispatch(fetchGistAll()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Check));