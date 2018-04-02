import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchCards } from './../actions';
import Card from '../components/SmallCard';

class List extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    const { cards } = this.props;
    return(
      <div className='row'>
        {cards.map((card) => {
          return (
            <Card
              key=''
              wrapperClassName='col-md-4'
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { card } = state;
  return {
    cards: card.cards,
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchCards,
})(List))