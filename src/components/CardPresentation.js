import React, { Component } from 'react';
import Viewer from './Viewer';

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
    console.log(this.state);
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    const {
      wrapperClassName,
      className,
      front,
      back,
    } = this.props;
    const { status } = this.state;
    return (
      <div className={wrapperClassName} style={{width: '100%'}}>
        <div className={className} style={cardStyle}>
          <div style={leftBtn}>
            left
          </div>
          <div style={content} onClick={this.flipCard}>
            {status && <h1>{front}</h1>}
            {!status && <Viewer content={back}/>}
          </div>
          <div style={rightBtn}>
            right
          </div>
        </div>
      </div>
    )
  }
}

export default CardPresentation;