import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchGistAll } from '../actions';
import Card from '../components/SmallCard';

class List extends Component {
  componentDidMount() {
    this.props.fetchGistAll();
  }

  render() {
    const { cards } = this.props;
    return(
      <div className='album py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            {cards.map((card) => {
              const fileName = Object.keys(card.files)[0];
              return (
                <Card
                  key=''
                  title={fileName}
                  wrapperClassName='col-md-4'
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({card}, props) => {
  return {
    cards: card.cards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGistAll: () => dispatch(fetchGistAll()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))