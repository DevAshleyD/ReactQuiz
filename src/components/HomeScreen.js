import React from 'react';

import Heading from './Heading';
import MainContainer from './MainContainer';
import Button from './Button';
import RadioCheckBox from './RadioCheckBox';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.handleQuizStart = props.handleQuizStart;

    this.state = {
      maxQuestions: props.totalNumberOfQuestions,
      numberOfQuestions: props.totalNumberOfQuestions
    }
  }

  collectInput = (e) => {
    let val = parseInt(e.target.value, 10);
    this.setState((prevState)=> {
      prevState.numberOfQuestions = val;
      return prevState;
    })
  }

  onButtonClick = (e) => {
    this.handleQuizStart(this.state.numberOfQuestions);
  }

  render() {

    return (
      <div>
        <Heading/>

        <MainContainer>
          <p>Select number of questions: </p>
          <form>
            <RadioCheckBox
              value="10"
              checked={this.state.numberOfQuestions === 10}
              handleInput={this.collectInput}
              >
              10
            </RadioCheckBox>

            <RadioCheckBox
              value="20"
              checked={this.state.numberOfQuestions === 20}
              handleInput={this.collectInput}
              >
              20
            </RadioCheckBox>

            <RadioCheckBox
              value={this.state.maxQuestions}
              checked={this.state.numberOfQuestions === this.state.maxQuestions}
              handleInput={this.collectInput}
              >
              {this.state.maxQuestions}
            </RadioCheckBox>
          </form>
          <div style={{textAlign: 'right'}}>
            <Button
              handleClick={this.onButtonClick}
              >Start Quiz</Button>
          </div>
        </MainContainer>
      </div>
    )
  }
}
