import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { flex, colors } from "../styles";
import { MainButton } from "../styles/components";
import { Logo } from "../img/logo";
import CharacterForm from "./characterForm";
import MobileForm from "./mobileForm";

const Heading = (props) => {
  const [showMobileForm, setShowMobileForm] = useState(false);
  const handleMobileButtonClick = () => {
    setShowMobileForm(!showMobileForm);
  };
  return (
    <HeadingContainer>
      <Logo />
      {props.characterData && props.characterData.length > 0 ? (
        <HeadingContentContainer>
          <CharacterForm />
          <MobileButton onClick={handleMobileButtonClick}>
            {showMobileForm ? "CLOSE" : "ADD"}
          </MobileButton>
        </HeadingContentContainer>
      ) : null}
      <MobileForm
        showMobileForm={showMobileForm}
        setShowMobileForm={setShowMobileForm}
      />
    </HeadingContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    characterData: state.characters.characterData,
  };
};
export default connect(mapStateToProps)(Heading);

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
        font-size: 0.9rem;
      }
    }
    button {
      width: auto;
    }

    @media (max-width: 1035px) {
      display: none;
    }
  }
`;

const HeadingContentContainer = styled.div`
  ${flex("column", "center", "end")}
  width: 70%;
`;

const MobileButton = styled(MainButton)`
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 6rem;
  padding: 0.5rem;
  @media (max-width: 1035px) {
    display: flex;
  }
`;
