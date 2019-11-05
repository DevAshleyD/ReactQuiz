import React, { Component } from "react";
import styled from "styled-components";

import { styles } from "./../constants";

import Heading from "./Heading";
import MainContainer from "./MainContainer";
import Button from "./Button";
import RadioCheckBox from "./RadioCheckBox";
import QuizFinishedScreen from "./QuizFinishedScreen";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.handleNewQuiz = props.handleNewQuiz;
    this.state = {
      questions: props.questions,
      score: 0,
      questionAnswered: false,
      selectedAnswer: "",
      answerCorrect: false,
      maxScore: props.questions.length,
      quizFinished: false
    };
  }

  collectAnswerInput = e => {
    console.log(e.target.value);
    const answer = e.target.value;
    this.setState(prevState => {
      prevState.selectedAnswer = answer;
      return prevState;
    });
  };

  onAnswerSubmit = () => {
    if (this.state.selectedAnswer) {
      let answerCorrect = false;
      let scoreInc = 0;
      if (this.state.selectedAnswer === this.state.questions[0].answer) {
        answerCorrect = true;
        scoreInc = 1;
      }
      this.setState(prevState => {
        prevState.answerCorrect = answerCorrect;
        prevState.questionAnswered = true;
        prevState.score += scoreInc;
        return prevState;
      });
    }
  };

  onNextQuestion = () => {
    if (this.state.questions.length > 1) {
      this.setState(prevState => {
        prevState.questionAnswered = "";
        prevState.selectedAnswer = "";
        prevState.answerCorrect = false;
        prevState.questions.shift();
        return prevState;
      });
    } else {
      this.setState(prevState => {
        prevState.quizFinished = true;
        console.log("done");
        return prevState;
      });
    }
  };

  render() {
    if (this.state.quizFinished) {
      return (
        <QuizFinishedScreen
          score={this.state.score}
          maxScore={this.state.maxScore}
          handleNewQuiz={this.handleNewQuiz}
        />
      );
    }
    const createChoice = choice => {
      if (choice) {
        return (
          <RadioCheckBox
            key={choice}
            value={choice}
            checked={choice === this.state.selectedAnswer}
            handleInput={this.collectAnswerInput}
            disabled={this.state.questionAnswered}
          >
            {choice}
          </RadioCheckBox>
        );
      } else {
        return null;
      }
    };
    const choices = [];
    choices.push(createChoice(this.state.questions[0].choice1));
    choices.push(createChoice(this.state.questions[0].choice2));
    choices.push(createChoice(this.state.questions[0].choice3));
    choices.push(createChoice(this.state.questions[0].choice4));

    let submitButtonDisabled = true;
    if (this.state.selectedAnswer) {
      submitButtonDisabled = false;
    }
    let submitButton = (
      <Button handleClick={this.onAnswerSubmit} disabled={submitButtonDisabled}>Submit Answer</Button>
    );

    let nextButton = "";
    if (this.state.questionAnswered) {
      submitButton = "";
      nextButton = (
        <Button handleClick={this.onNextQuestion}>Next Question</Button>
      );
    }

    let feedback = "";
    if (this.state.questionAnswered) {
      let feedbackHeading = "Incorrect...";
      let feedbackStyles = {
        background: styles.color5,
        marginBottom: "1rem",
        padding: "1rem"
      };
      if (this.state.answerCorrect) {
        feedbackHeading = "Correct!";
        feedbackStyles.background = styles.color3;
      }
      feedback = (
        <div style={feedbackStyles}>
          <h3>{feedbackHeading}</h3>
          <p>{this.state.questions[0].answerExplained}</p>
        </div>
      );
    }

    return (
      <div>
        <Heading />
        <MainContainer>
          <h4>Score: {this.state.score}</h4>
          <p>{this.state.questions[0].question}</p>
          {feedback}
          <div style={{ textAlign: "center" }}>{nextButton}</div>
          <div style={{ borderTop: "2px solid #333", margin: "1rem 0" }}>
            {choices}
          </div>
          <div style={{ textAlign: "right" }}>{submitButton}</div>
        </MainContainer>
      </div>
    );
  }
}

export default Quiz;
