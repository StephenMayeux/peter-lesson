import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  renderFriends() {
    const friends = ['Peter', 'Gina', 'Charlie', 'Julie'];
    return friends.map((friend, idx) => {
      return (
        <div className="friendWrapper" key={idx}>
          <h3
            className="friendName"
            onClick={() => this.props.actions.changeFriend(friend)}
          >
            {friend}
          </h3>
        </div>
      )
    })
  }

  render() {
    const greeting = this.props.friend
      ? `Welcome to React, ${this.props.friend}`
      : 'Welcome To React!'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{greeting}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderFriends()}
      </div>
    );
  }
}

const mapStateToProps = ({ friend }) => {
  return { friend }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
