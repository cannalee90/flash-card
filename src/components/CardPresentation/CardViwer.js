import React, { Component } from 'react';
import { convertFileToFront } from '../../utils/flashcard';
import marked from 'marked';

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
    } = this.props;
    const front = convertFileToFront(currentCard.filename);
    const back = currentCard.content;
    return (
      <div className='card-presentation' id='cardPresenter'>
        <div className='left-btn'>
        </div>
        <div className={`card-viwer ${!status ? '--flipped' : null}`} onClick={this.flipCard}>
          <div className={'content content--front'}>
            <h1>{front}</h1>
          </div>
          <div className={'content content--back'}>
            <div dangerouslySetInnerHTML={this.createMarkup(back)} />
          </div>
        </div>
        <div className='right-btn'>
        </div>
      </div>
    )
  }
}

export default CardPresentation;