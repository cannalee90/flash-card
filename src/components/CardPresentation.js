import React, { Component } from 'react';
import Viewer from './Viewer';

class CardPresentation extends Component {
  render() {
    const {
      wrapperClassName,
      className,
    } = this.props;
    return (
      <div className={wrapperClassName} style={{width: '100%'}}>
        <div className={className} style={{height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', flexFlow: 'row wrap'}}>
          <div style={{flex: '1'}}>
            left
          </div>
          <div style={{flex: '2', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Viewer />
          </div>
          <div style={{flex: '1', textAlign: 'right'}}>
            right
          </div>
        </div>
      </div>
    )
  }
}

export default CardPresentation;