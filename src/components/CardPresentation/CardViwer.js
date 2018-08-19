import React, { Component } from 'react';
import { convertFileToFront } from '../../utils/flashcard';
import marked from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../style/card.css';

class CardPresentation extends Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  createMarkup = (content) => {
    const __html = marked(content);
    return {__html: __html};
  }

  flipCard = () => {
    this.props.flipCard();
  }

  render() {
    const {
      status,
      currentCard,
      prevCard,
      nextCard,
      isFirstCard,
      isLastCard
    } = this.props;
    const front = convertFileToFront(currentCard.filename);
    const back = currentCard.content;
    return (
      <div className='card-presentation' id='cardPresenter'>
        <button
          className={`btn left-btn ${isFirstCard ? 'hidden' : null}`}
          onClick={prevCard}
          disabled={isFirstCard}
        >
          <FontAwesomeIcon icon='angle-left'/>
        </button>
        <div className={`card-viwer ${!status ? 'card-viwer--flipped' : null}`} onClick={this.flipCard}>
          <div className={'content content--front'}>
            <h1>{front}</h1>
          </div>
          <div className={'content content--back'}>
            <div dangerouslySetInnerHTML={this.createMarkup(back)} />
          </div>
        </div>
        <button
          className={`btn right-btn ${isLastCard ? 'hidden' : null}`}
          onClick={nextCard}
          disabled={isLastCard}
        >
          <FontAwesomeIcon icon='angle-right' />
        </button>
      </div>
    )
  }
}

export default CardPresentation;