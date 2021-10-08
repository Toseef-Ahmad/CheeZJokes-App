import React from 'react';
import './JockList.css';
import Rating from './Rating';
import Emojy from './Emojy';

class JockList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 1,
    };
    this.handleVotes = this.handleVotes.bind(this);
  }

  handleVotes(delta) {
    this.setState((prev) => ({
      vote: prev.vote + delta,
    }));
  }

  render() {
    const jock = this.props.jock;
    return (
      <div>
        <div className="JockList-container">
          <Rating handleVotes={this.handleVotes} vote={this.state.vote} />
          <p className="jock">{jock}</p>
          <Emojy vote={this.state.vote} />
        </div>
      </div>
    );
  }
}

export default JockList;
