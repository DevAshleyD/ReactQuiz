import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: .25rem .75rem;
  font-size: 1.3rem;
  background: ${props => props.background || 'transparent'};
  border-radius: 3px;
  display: inline-block;
  border: 2px solid #444;
  cursor: pointer;
  transition: .25s;
  ${props => props.italic && 'font-style: italic;'}

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(.95);
  }

`;

export default function Button(props){
  return (
      <StyledButton
        onClick={props.handleClick}
        {...props}
        >
        {props.children}
      </StyledButton>
  )
}
