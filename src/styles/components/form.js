import styled from "styled-components";
import { flex } from "../functions";
import { colors } from "../colors";

export const Form = styled.form`
  ${flex("column", "center", "center")}
`;

export const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 12rem;
  height: 2.2rem;
  background-color: ${colors.main.light};
  border-radius: 0.3rem;
  text-align: center;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.3);

  &:focus {
    border: 1px solid ${colors.main.secondary};
  }
`;

export const Select = styled.select`
  margin: 0.5rem;
  padding: 0.5rem;
  height: 2.2rem;
  width: 6rem;
  background-color: ${colors.main.light};
  text-align: center;
  border-radius: 0.3rem;
  text-align: center;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.3);

  &:focus {
    border: 1px solid ${colors.main.secondary};
  }
`;


