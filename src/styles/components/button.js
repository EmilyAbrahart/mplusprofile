import styled from "styled-components";
import { colors } from "../colors";

export const MainButton = styled.button`
  color: ${colors.main.light};
  background-color: ${colors.main.primary.extra_dark};
  padding: 0.6rem 3rem;
  font-weight: 700;
  margin: 0.5rem;
  border-radius: 0.3rem;
  width: 40%;
  z-index: 503;

  &:hover {
    cursor: pointer;
  }
`;
