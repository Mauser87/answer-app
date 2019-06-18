import React, { Component } from 'react';
import './App.css'




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      randomAnswer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.giveAnswer = this.giveAnswer.bind(this);
  }

  giveAnswer() {
    if (this.state.inputValue) {
      this.setState({
        inputValue: '',
        randomAnswer: Math.floor(Math.random() * 3)
      })
    }
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const possibleAnswer = [
      "yes",
      "no",
      "maybe"
    ]

    const answer = possibleAnswer[this.state.randomAnswer];

    return (
      <div>
        <h1>Ask your question</h1>
        <input value={this.state.inputValue} onChange={this.handleChange}></input>
        <button onClick={this.giveAnswer}>Answer</button>
        <h1>{answer}</h1>
      </div>
    );
  }
}