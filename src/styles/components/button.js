import styled from "styled-components";
import { colors } from "../colors";

export const MainButton = styled.button`
  color: ${colors.main.light};
  background-color: ${colors.main.secondary};
  padding: 0.6rem 3rem;
  font-weight: 700;
  margin: 0.5rem;
  border-radius: 0.3rem;
  width: 40%;

  &:hover {
    cursor: pointer;
  }
`;
