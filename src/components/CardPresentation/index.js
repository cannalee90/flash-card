import React, { Component } from 'react';

import { isEmptyObj } from '../../utils';
import CardViwer from './CardViwer';

const DEFAULT_FILENAME = '카드를 선택해 주세요';
const DEFAULT_CONTENT = '빈 카드 입니다;'

export default class CardPresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedCards: [],
      unPickedCards: [],
      currentCard: {
        filename: DEFAULT_FILENAME,
        content: DEFAULT_CONTENT,
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
        this.setFirstCard()
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
    const { unPickedCards, pickedCards, currentCard } = this.state;
    if(unPickedCards.length < 1) {
      alert('마지막 카드입니다');
    } else {
      const nextCurrentCard = unPickedCards.shift();
      const nextPickedCards = [...pickedCards, currentCard];
      const nextUnPickedCards = [...unPickedCards];
      this.setState({
        unPickedCards: nextUnPickedCards,
        pickedCards: nextPickedCards,
        currentCard: nextCurrentCard,
        status: true,
      });
    }
  }

  prevCard = () => {
    const { unPickedCards, pickedCards, currentCard } = this.state;
    if(pickedCards.length < 1) {
      alert('맨 처음 카드입니다')
    } else {
      const lastCard = pickedCards.pop();
      const nextPickedCards = [...pickedCards];
      const nextUnPickedCards = [currentCard, ...unPickedCards];
      this.setState({
        pickedCards: nextPickedCards,
        currentCard: lastCard,
        unPickedCards: nextUnPickedCards,
        status: true,
      });
    }
  }

  setFirstCard = async () => {
    const { unPickedCards } = this.state
    if(unPickedCards.length) {
      const currentCard = unPickedCards.shift();
      await this.setState({
        currentCard,
        status: true,
        unPickedCards: [...unPickedCards]
      });
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, document.getElementById('cardPresenter')]);
    }
  }

  isEmptyCard(card) {
    const { filename, content } = card;
    if (filename === DEFAULT_FILENAME && content === DEFAULT_CONTENT) {
      return true;
    } else if (!filename && !content) {
      return true;
    }
    return false;
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