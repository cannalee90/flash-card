import React, { Component } from 'react';

import { isEmptyObj } from '../../utils';
import CardViwer from './CardViwer';

export default class CardPresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedCards: [],
      unPickedCards: [],
      currentCard: {
        filename: '카드를 선택해 주세요',
        content: '빈 카드 입니다',
      },
      status: true,
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
    if(!isEmptyObj(newProps.cards)) {
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
  }

  flipCard = () => {
    this.setState({
      status: !this.state.status
    });
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
        status: true,
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
        status: true,
      });
    }
  }

  setCurrentCard = async () => {
    if(this.state.unPickedCards.length) {
      await this.setState({
        currentCard: this.state.unPickedCards[0],
        status: true,
      });
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, document.getElementById('cardPresenter')]);
    }
  }

  render() {
    const { currentCard, status, pickedCards, unPickedCards } = this.state;

    return (
      <CardViwer
        nextCard={this.nextCard}
        prevCard={this.prevCard}
        flipCard={this.flipCard}
        currentCard={currentCard}
        isFirstCard={!pickedCards.length}
        isLastCard={!unPickedCards.length}
        status={status}
      />
    );
  }

}