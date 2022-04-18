import React from "react";
import styled from "styled-components";
import { colors } from "../colors";

export const Spinner = () => {
  return (
    <SpinnerDiv>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerDiv>
  );
};

const SpinnerDiv = styled.div`
font-size: 8px;
  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 1.5em;
    height: 1.5em;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 0.5em;
    width: 1em;
    background: ${colors.main.secondary};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 0.5em;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 2em;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 3.5em;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 0.5em;
      height: 4em;
    }
    50%,
    100% {
      top: 1.5em;
      height: 2em;
    }
  }
`;
