import React from "react";
import styled from "styled-components";

const BlockLabel = styled.label`
  display: block;
  margin: 10px 0;
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.25s;

  input {
    display: none;
  }

  span {
    display: block;
    padding-left: 50px;
    transition: 0.25s;

    &:focus {
      outline: none;
      padding-left: 60px;
    }

    &::before {
      content: "";
      position: absolute;
      height: 10px;
      width: 10px;
      border: 2px solid black;
      left: 20px;
      top: 5px;
      transition: 0.25s;
    }
  }

  input:checked + span {
    font-size: 1.4rem;

    &::before {
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
      height: 20px;
      top: -2px;
    }
  }
`;

export default function RadioCheckBox(props) {
  let disabled = false;
  let spanStyles = {
    opacity: 1
  };
  const e = {};
  e.target = {};
  e.target.value = props.value;
  if (props.disabled === true) {
    disabled = true;
    spanStyles.opacity = 0.75;
  }

  return (
    <BlockLabel>
      <input
        type="radio"
        disabled={disabled}
        value={props.value}
        checked={props.checked}
        onChange={props.handleInput}
      />
      <span
        style={spanStyles}
        role="button"
        tabIndex="0"
        onKeyPress={() => {
          props.handleInput(e);
        }}
      >
        {props.children}
      </span>
    </BlockLabel>
  );
}
