import React from "react";
import styled from "styled-components";
import { flex, colors } from "../styles";
import HeroArt from "../img/HeroArt.png";
import CharacterForm from "./characterForm";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <ContentContainer>
        <h1>
          Mythic <span>Plus</span> Profile<span>.</span>
        </h1>
        <FormContainer>
          <CharacterForm />
        </FormContainer>
      </ContentContainer>
      <HeroImage src={HeroArt} />
    </WelcomeContainer>
  );
};

export default Welcome;

const WelcomeContainer = styled.div`
position: relative;
  ${flex("row", "center", "center")}
  width: 100%;
  min-height: 80vh;

  @media (max-width: 1230px) {
    background-position: center;
  }

  span {
    color: ${colors.main.primary.extra_dark};
  }
`;

const ContentContainer = styled.div`
  ${flex("column", "center", "center")}
  width: 50%;
  background-color: ${colors.main.primary.light};
  padding: 2rem 4rem;
  border-radius: 2rem;

  @media (max-width: 1230px) {
    width: 80%;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }
`;

const FormContainer = styled.div`
  width: 90%;
  ${flex("column", "center", "center")};

  @media (max-width: 1230px) {
    input, select, button {
      width: 60%;
    }
  }

  @media (max-width: 430px) {
    input, select, button {
      width: 80%;
    }
  }
`;

const HeroImage = styled.img`
position: absolute;
right: 0;
bottom: 0;
  height: auto;
  width: 50%;
`;
