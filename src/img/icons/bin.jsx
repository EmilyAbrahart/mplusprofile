import React from "react";
import styled from "styled-components";
import { colors } from "../../styles";

const Bin = () => {
  return (
    <BinSVG
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 3V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V3M0 3.5H15M1.5 3.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H12.5C13.0523 14.5 13.5 14.0523 13.5 13.5V3.5M7.5 7V12M4.5 9V12M10.5 9V12"
        stroke="black"
      />
    </BinSVG>
  );
};

export default Bin;

const BinSVG = styled.svg`
  path {
    stroke: ${colors.main.light};
  }
  &:hover {
      cursor: pointer;
    path {
      stroke: ${colors.main.warning};
    }
  }
`;
