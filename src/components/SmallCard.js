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

  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.title);
  }
  
  render() {
    const {
      wrapperClassName,
      title,
      hash,
      isLoading,
    } = this.props;
    return (
      <div className={wrapperClassName}>
        <div className='card mb-4 box-shadow' onMouseEnter={this.onMouseEnter}>
          <div className='card-body'>
            <p className='card-text'>
              <Link to={`/card/${hash}`}>{title}</Link>
            </p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <Button
                  type='button'
                  className='btn-sm btn-outline-secondary'
                  onClick={this.editGist}
                >Edit
                </Button>                
                <Button
                  type='button'
                  className='btn-sm btn-outline-secondary'
                  onClick={this.deleteGist}
                  disabled={isLoading}
                >Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}