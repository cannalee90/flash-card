import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { 
  fetchGistAll,
  deleteGist,
} from '../actions';
import Card from '../components/SmallCard';
import CardPresentation from '../components/CardPresentation';
import { convertFileToFront } from '../utils/flashcard';

class List extends Component {

  componentDidMount() {
    this.props.fetchGistAll();
  }

  editGist = (title) => {
    this.props.history.push(`/edit/${title}`);
  }

  render() {
    const { cards, isLoading } = this.props;
    return(
      <div style={{minHeight: 'calc(100vh - 56px)', paddingTop: '20px'}}>
        <div className='container'>
          <CardPresentation
            cards={this.props.cards}
          />
        </div>
        <div className='container'>
          <div className='row'>
            {Object.keys(cards).map((key) => {
              const obj = cards[key];
              const front = convertFileToFront(key);
              return (
                <Card
                  key={key}
                  title={front}
                  rawURL={obj.raw_url}
                  wrapperClassName='col-md-4'
                  deleteGist={this.props.deleteGist}
                  editGist={this.editGist}
                  isLoading={isLoading}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ card }, props) => {
  return {
    cards: card.cards || {},
    isLoading: card.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGistAll: () => dispatch(fetchGistAll()),
    deleteGist: (filename)=> dispatch(deleteGist(filename)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))