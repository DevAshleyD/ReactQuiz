import React, { Component } from 'react';
import questions from './data';
import HomeScreen from './components/HomeScreen.js'
import Quiz from './components/Quiz.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: questions,
      currentView: 'HomeScreen',
      currentQuestions: []
    };
  }

  onNewQuiz = () => {
    this.setState((prevState) => {
      prevState.currentView = 'HomeScreen';
      return prevState;
    });
  }

  onQuizStart = (numberOfQuestions) => {
    let quizQuestions = this.state.data.slice();
    quizQuestions.sort(() => 0.5 - Math.random());
    quizQuestions = quizQuestions.slice(0, numberOfQuestions);
    this.setState((prevState) => {
      prevState.currentView = 'Quiz';
      prevState.currentQuestions = quizQuestions;
      return prevState;
    });
  }

  render() {
    if (this.state.currentView === 'HomeScreen') {
      return (
        <HomeScreen
          totalNumberOfQuestions={this.state.data.length}
          handleQuizStart={this.onQuizStart}
        />
      );
    }
    if (this.state.currentView === 'Quiz') {
      return (
        <Quiz
          questions={this.state.currentQuestions}
          handleNewQuiz={this.onNewQuiz}
        />
      );
    }
  }
}

export default App;
