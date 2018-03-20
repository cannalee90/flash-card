import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

class List extends Component {
  componenetDidMount() {

  }

  render() {
    const { cards } = this.props;
    return(
      <div>
        <h1>This is List</h1>
        <ul>
          <li>
            <Link to='/'>App</Link>
          </li>
          <li>
            <Link to='/newcard'>NewCard</Link>
          </li>
          <li>
            <Link to='/list'>List</Link>
          </li>
        </ul>
        <div>
          <ul>
            {cards.map((card) => {
              return (
                <li>card.title</li>
              )
            })}
                  
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { card } = state;
  return {
    cards: card.cards,
  }
}

export default withRouter(connect(mapStateToProps, null)(List))