import React from 'react';
import JockList from './JockList';
import axios from 'axios';
import './CheezJokes.css';

class CheezJokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isLoading: true,
    };
  }

  async fetch10Jokes() {
    this.jokes = [];
    for (let i = 0; i < 10; i++) {
      const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      this.jokes.push(res.data);
    }
    this.setState({
      jokes: this.jokes,
      isLoading: false,
    });
    localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
  }

  componentDidMount() {
    const jokesFromStorate = JSON.parse(localStorage.getItem('jokes'));
    // this.fetch10Jokes();
    if (jokesFromStorate) {
      this.setState({
        jokes: jokesFromStorate,
        isLoading: false,
      });
    } else {
      console.log('Here');
      this.fetch10Jokes();
    }
  }

  render() {
    const styles = {
      loader: {
        fontSize: 100,
        marginTop: '20%',
        marginLeft: '40%',
      },
    };
    const jokesList = this.state.jokes.map((jock) => (
      <JockList jock={jock.joke} key={jock.id} />
    ));

    const spinner = (
      <i className="fas fa-spinner fa-pulse" style={styles.loader}></i>
    );

    return (
      <>
        <div className="container">
          <div className="sidebar">
            <h1 className="title">Dad Jokes</h1>
            <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
            <button>Load Jokes</button>
          </div>
          <div className="main">
            {this.state.isLoading ? spinner : jokesList}
          </div>
        </div>
      </>
    );
  }
}

export default CheezJokes;
