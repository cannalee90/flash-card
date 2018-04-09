import React, { Component } from 'react';
import Viewer from './Viewer';
import { convertFileToFront } from '../utils/flashcard';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import angleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import angleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

let cardStyle = {
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  flexFlow: 'row wrap',
};

let leftBtn = {
  padding: '15px',
  flexBasis: '30px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

let rightBtn = {
  padding: '15px',
  flexBasis: '30px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

let content = {
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

  componentDidMount() {
    this.changeElementSize();
    window.addEventListener('resize', this.changeElementSize);
  }

  changeElementSize = () => {
    const windowWidth = window.innerWidth;
    const containerWidth = document.querySelector('.container').offsetWidth;
    const width = parseInt(windowWidth - containerWidth);
    const flexBasis = `${width}px`;
    const marginLeft = (width / 2) * -1;
    const marginRight = (width / 2) * -1;
    document.querySelector('.leftBtn').style.flexBasis =  flexBasis;
    document.querySelector('.rightBtn').style.flexBasis =  flexBasis;
    document.querySelector('.leftBtn').style.marginLeft = `${marginLeft}px`;
    document.querySelector('.rightBtn').style.marginRight =  `${marginRight}px`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeElementSize);
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
          <div className='leftBtn' style={leftBtn} onClick={this.props.prevCard}>
            <FontAwesomeIcon icon={angleLeft} />
          </div>
          <div style={content} onClick={this.flipCard}>
            {status && <h1>{front}</h1>}
            {!status && <Viewer content={back}/>}
          </div>
          <div className='rightBtn' style={rightBtn} onClick={this.props.nextCard}>
            <FontAwesomeIcon icon={angleRight} />
          </div>
        </div>
      </div>
    )
  }
}

export default CardPresentation;