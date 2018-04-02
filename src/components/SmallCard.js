import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class SmallCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      wrapperClassName,
      title,
    } = this.props;
    return (
      <div className={wrapperClassName}>
        <div className='card mb-4 box-shadow'>
          <div className='card-body'>
            <p className='card-text'>
              {title}
            </p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <Button type='button' className='btn-sm btn-outline-secondary'>View</Button>
                <Button type='button' className='btn-sm btn-outline-secondary'>Edit</Button>                
              </div>
              <small className='text-muted'>9 mins</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}