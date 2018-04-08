import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { 
  fetchGistAll,
  deleteGist,
} from '../actions';
import Card from '../components/SmallCard';

class List extends Component {
  componentDidMount() {
    this.props.fetchGistAll();
  }

  editGist = (title) => {
    this.props.history.push(`/edit/${title}`);
  }

  render() {
    const { cards } = this.props;
    return(
      <div> 
        <div className='container' style={{minHeight: 'calc(100vh - 56px)', paddingTop: '20px'}}>
          <div className='row'>
            {Object.keys(cards).map((key) => {
              const obj = cards[key];
              return (
                <Card
                  key={key}
                  title={key.split('.')[0]}
                  rawURL={obj.raw_url}
                  wrapperClassName='col-md-4'
                  deleteGist={this.props.deleteGist}
                  editGist={this.editGist}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ card }, props) => {
  return {
    cards: card.cards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGistAll: () => dispatch(fetchGistAll()),
    deleteGist: (filename)=> dispatch(deleteGist(filename)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))