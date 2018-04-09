import React, { Component } from 'react';
import Viewer from './Viewer';
import { convertFileToFront } from '../utils/flashcard';

const cardStyle = {
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  flexFlow: 'row wrap',
};

const leftBtn = {
  flex: '1',
};

const rightBtn = {
  flex: '1',
  textAlign: 'right',
};

const content = {
  flex: '2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

class CardPresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }

  flipCard = () => {
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    const {
      wrapperClassName,
      className,
      currentCard,
    } = this.props;
    const { status } = this.state;
    const front = convertFileToFront(currentCard.filename);
    const back = currentCard.content;
    return (
      <div className={wrapperClassName} style={{width: '100%'}}>
        <div className={className} style={cardStyle}>
          <div style={leftBtn} onClick={this.props.prevCard}>
            left
          </div>
          <div style={content} onClick={this.flipCard}>
            {status && <h1>{front}</h1>}
            {!status && <Viewer content={back}/>}
          </div>
          <div style={rightBtn} onClick={this.props.nextCard}>
            right
          </div>
        </div>
      </div>
    )
  }
}

export default CardPresentation;