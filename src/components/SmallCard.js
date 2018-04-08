import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SmallCard extends Component {

  deleteGist = () => {
    if(window.confirm('정말 삭제하시겠습니까?')) {
      this.props.deleteGist(this.props.title);
    }
  }

  editGist = () => {
    this.props.editGist(this.props.title);
  }
  
  render() {
    const {
      wrapperClassName,
      title,
      hash,
    } = this.props;
    return (
      <div className={wrapperClassName}>
        <div className='card mb-4 box-shadow'>
          <div className='card-body'>
            <p className='card-text'>
              <Link to={`/card/${hash}`}>{title}</Link>
            </p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <Button type='button' className='btn-sm btn-outline-secondary'>View</Button>
                <Button type='button' className='btn-sm btn-outline-secondary' onClick={this.editGist}>Edit</Button>                
                <Button type='button' className='btn-sm btn-outline-secondary' onClick={this.deleteGist}>Remove</Button>
              </div>
              <small className='text-muted'>9 mins</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}