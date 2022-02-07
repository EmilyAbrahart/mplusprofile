import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles";

export const CircleIcon = (props) => {
  return (
    <svg
      active={props.active}
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
    >
      <path d="M.5 7.5a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z" />
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7.5h7m-3.5 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" stroke="#000" />
    </svg>
  );
};

export const FortifiedIcon = (props) => {
  return (
    <svg
      active={props.active}
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 14.49v.5h.5v-.5h-.5Zm-10 0H0v.5h.5v-.5Zm14 .01v.5h.5v-.5h-.5ZM8 3.498a2.499 2.499 0 0 1-2.5 2.498v1C7.433 6.996 9 5.43 9 3.498H8ZM5.5 5.996A2.499 2.499 0 0 1 3 3.498H2a3.499 3.499 0 0 0 3.5 3.498v-1ZM3 3.498A2.499 2.499 0 0 1 5.5 1V0A3.499 3.499 0 0 0 2 3.498h1ZM5.5 1C6.881 1 8 2.119 8 3.498h1A3.499 3.499 0 0 0 5.5 0v1Zm5 12.99H.5v1h10v-1Zm-9.5.5V12.495H0V14.49h1Zm2.5-4.496h4v-1h-4v1Zm6.5 2.5V14.49h1V12.494h-1Zm-2.5-2.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-6.5 2.5a2.5 2.5 0 0 1 2.5-2.5v-1a3.5 3.5 0 0 0-3.5 3.5h1ZM14 13v1.5h1V13h-1Zm.5 1H12v1h2.5v-1ZM12 11a2 2 0 0 1 2 2h1a3 3 0 0 0-3-3v1Zm-.5-3A1.5 1.5 0 0 1 10 6.5H9A2.5 2.5 0 0 0 11.5 9V8ZM13 6.5A1.5 1.5 0 0 1 11.5 8v1A2.5 2.5 0 0 0 14 6.5h-1ZM11.5 5A1.5 1.5 0 0 1 13 6.5h1A2.5 2.5 0 0 0 11.5 4v1Zm0-1A2.5 2.5 0 0 0 9 6.5h1A1.5 1.5 0 0 1 11.5 5V4Z"
        fill="#000"
      />
    </svg>
  );
};

export const AddIcon = () => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 4v7M4 7.5h7m-3.5 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
        stroke="#000"
      />
    </svg>
  );
};

export const RefreshIcon = (props) => {
  return (
    <RefreshSVG
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path d="M.5 7.5A7 7 0 0 1 13 3.17m1.5 4.33A7 7 0 0 1 2 11.83m3-.33H1.5V15m12-15v3.5H10" />
    </RefreshSVG>
  );
};

// refresh icon styling
const rotate = keyframes`
 from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
`;

const RefreshSVG = styled.svg`
  path {
    stroke: ${colors.main.light};
  }
  &.spin {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const TyrannicalIcon = (props) => {
  return (
    <svg
      active={props.active}
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
    >
      <path
        clipRule="evenodd"
        d="M10.5 3.498a2.999 2.999 0 0 1-3 2.998 2.999 2.999 0 1 1 3-2.998ZM12.5 14.49h-10v-1.996a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1.997Z"
        strokeLinecap="square"
      />
    </svg>
  );
};
