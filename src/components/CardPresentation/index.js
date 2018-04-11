import React, { Component } from 'react';

import { convertFileToFront } from '../../utils/flashcard';
import { isEmptyObj } from '../../utils';
import CardViwer from './CardViwer';

export default class CardPresentation extends Component {
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

  setCurrentCard = () => {
    if(this.state.unPickedCards.length) {
      this.setState({
        currentCard: this.state.unPickedCards[0],
      });
    }
  }
  
  render() {
    const { currentCard } = this.state;
    
    return (
      <CardViwer
        nextCard={this.nextCard}
        prevCard={this.prevCard}
        currentCard={currentCard}
      />
    );
  }

}