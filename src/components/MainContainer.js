import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  font-size: 1.3rem;
  border-radius: 3px;
  border-left: 2px solid #444;
  border-bottom: 2px solid #444;
  padding: 1rem;
  position: relative;
  box-shadow: 0px 0px 0px #444,
  -1px 1px 0px #444,
  -2px 2px 0px #444,
  -3px 3px 0px #444,
  -4px 4px 0px #444,
  -5px 5px 0px #444,
  -6px 6px 0px #444,
  -7px 7px 0px #444,
  -8px 8px 0px #444,
  -9px 9px 0px #444,
  -10px 10px 0px #444;
  transition: .25s;

  @media (max-width: 850px) {
    box-shadow: none;
    width: 98%;
  }

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #444, rgba(68,68,68,0));
  }

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    right: 0;
    top: 0;
    background: linear-gradient(to top, #444, rgba(68,68,68,0));
  }
`;

const MainContainer = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default MainContainer;
