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
import { isEmptyObj } from '../utils';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedCards: [],
      unPickedCards: [],
      currentCard: {
        front: '',
        back: '',
      },
    };
  }

  componentWillMount() {
    if(!this.state.unPickedCards.length && !isEmptyObj(this.props.cards)) {
      this.setState({
        unPickedCards: Object.keys(this.props.cards).map((cur) => {
          return this.props.cards[cur];
        }),
      }, () => {
        this.setCurrentCard();
      });
    }    
  }

  componentWillReceiveProps(newProps) {
    if(!this.state.unPickedCards.length && !isEmptyObj(newProps.cards)) {
      this.setState({
        unPickedCards: Object.keys(newProps.cards).map((cur) => {
          return newProps.cards[cur];
        }),
      }, () => {
        this.setCurrentCard()
      })
    }
  }

  componentDidMount() {
    this.props.fetchGistAll();
  }

  nextCard = () => {
    const { unPickedCards, pickedCards } = this.state;
    if(unPickedCards.length <= 1) {
      alert('마지막 카드입니다');
    } else {
      pickedCards.push(unPickedCards.shift());
      this.setState({
        unPickedCards: [...unPickedCards],
        pickedCards: [...pickedCards],
        currentCard: unPickedCards[0],
      });
    }
  }

  prevCard = () => {
    const { unPickedCards, pickedCards } = this.state;
    if(pickedCards.length < 1) {
      alert('맨 처음 카드입니다')
    } else {
      const lastCard = pickedCards.pop();
      this.setState({
        pickedCards: [...pickedCards],
        currentCard: lastCard,
        unPickedCards: [lastCard, ...unPickedCards],
      });
    }
  }

  editGist = (title) => {
    this.props.history.push(`/edit/${title}`);
  }

  setCurrentCard = () => {
    if(this.state.unPickedCards.length) {
      this.setState({
        currentCard: this.state.unPickedCards[0],
      });
    }
  }

  render() {
    const { cards } = this.props;
    const { currentCard } = this.state;
    return(
      <div style={{minHeight: 'calc(100vh - 56px)', paddingTop: '20px'}}>
        <div className='container'>
          <div className='row'>
            <CardPresentation
              nextCard={this.nextCard}
              prevCard={this.prevCard}
              currentCard={currentCard}
            />
          </div>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGistAll: () => dispatch(fetchGistAll()),
    deleteGist: (filename)=> dispatch(deleteGist(filename)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))