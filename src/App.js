import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FocusTrap from 'react-focus-trap'

class Test extends React.Component {
  state = {
    edit: false,
    inputValue: 'Hello World!',
  }

  _toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  _handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <div>
        <button onClick={this._toggleEdit}>
          {this.state.edit ? "view" : "edit"}
        </button>

        <FocusTrap
          onExit={this._toggleEdit}
          active={this.state.edit}
        >
          <p>
            <input
              type="text"
              onChange={this._handleChange}
              value={this.state.inputValue}
              autoFocus
            />
          </p>
        </FocusTrap>

        {!this.state.edit && <p>{this.state.inputValue}</p>}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>
            <a href="https://github.com/vigetlabs/react-focus-trap/issues/22">
              react-focus-trap/issues/22 Test
            </a>
          </h1>
          <Test />
        </p>
      </div>
    );
  }
}

export default App;
