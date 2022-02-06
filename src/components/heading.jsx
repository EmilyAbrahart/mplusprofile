import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { flex, colors } from "../styles";
import { Logo } from "../img/logo";

import CharacterForm from "./characterForm";

const Heading = ({ characters: { characterList } }) => {
  return (
    <HeadingContainer>
      <Logo />
      {characterList.length > 0 ? <CharacterForm /> : null}
    </HeadingContainer>
  );
};

export default connect((state) => state)(Heading);

const HeadingContainer = styled.div`
  ${flex("row", "space-between", "center")};
  width: 100%;
  padding-top: 0.5rem;

  span {
    color: ${colors.main.secondary};
  }
  div.form-container {
    ${flex("row", "flex-end", "center")};
    form {
      ${flex("row", "center", "center")};
      width: auto;

      input,
      select {
        width: auto;
      }
    }
    button {
      width: auto;
    }
  }
`;
