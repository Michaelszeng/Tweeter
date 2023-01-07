import React from "react";

class Tweet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tweet-card">
        <h1>@{this.props.author}</h1>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          author: '',
          tweet: '',
          tweets: [],
        };
    }

    handleAuthorChange = (event) => {
      this.setState({
        author: event.target.value,
      });
    }

    handleInputChange = (event) => {
      this.setState({
        tweet: event.target.value,
      });
    }

    handleSubmit = (event) => {
      const newTweet = {
        author: this.state.author,
        text: this.state.tweet,
      };

      this.setState({
        tweets: [...this.state.tweets, newTweet],
        author: '',
        tweet: '',
      })
    }

    render() {
        return (
          <div className="app">
            <div className="tweet-box">
                <input value={this.state.author} onChange={this.handleAuthorChange} className="tweet-box-author" placeholder="Author"></input>
                <textarea value={this.state.tweet} onChange={this.handleInputChange} className="tweet-box-input" placeholder="Tweet Someting!"></textarea>
                <div className="tweet-box-actions">
                    <span className="tweet-box-length">{this.state.tweet.length} / 280</span>
                    <button onClick={this.handleSubmit} className="tweet-box-submit">Submit</button>
                </div>
            </div>
            <div>
              {this.state.tweets.map((tweet) => <Tweet author={tweet.author} text={tweet.text}/>)}
            </div>
          </div>
        );
    }
}

export default App;