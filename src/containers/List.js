import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { 
  fetchGistAll,
  deleteGist,
} from '../actions';
import Card from '../components/SmallCard';
import CardPresentation from '../components/CardPresentation';
import { convertFileToFront } from '../utils/flashcard';

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
            <CardPresentation
              front='Process'
              back={
                `In computing, a process is an instance of a computer program that is being executed.
                It contains the program code and its current activity.
                Depending on the operating system (OS), a process may be made up of multiple threads of execution that execute instructions concurrently.`
              }
            />
          </div>
          <div className='row'>
            {Object.keys(cards).map((key) => {
              const obj = cards[key];
              const front = convertFileToFront(key);
              return (
                <Card
                  key={key}
                  title={front}
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