import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      showImage: false,
    };
  }

  toggle = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.toggle}>Mostrar</button>
          {this.state.showImage &&(
            <img src={logo} className="App-logo" alt="logo" />
          )}
          <p>
            <h1>First Steps</h1>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;