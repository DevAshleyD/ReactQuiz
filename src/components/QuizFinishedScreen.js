import React from 'react';

import Heading from './Heading';
import MainContainer from './MainContainer';
import Button from './Button';

export default function QuizFinishedScreen(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <Heading />
      <MainContainer>
        <h1>Quiz Finished</h1>
        <h2>You scored:</h2>
        <h2>{props.score} out of {props.maxScore}</h2>
        <Button handleClick={props.handleNewQuiz}>New Quiz</Button>
      </MainContainer>
    </div>
  )
}
