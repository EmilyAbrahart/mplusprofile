import React from "react";
import styled from "styled-components";
import { flex, colors } from "../styles";
import HeroImg from "../img/hero.webp";
import CharacterForm from "./characterForm";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <BackgroundLayer>
        <ContentContainer>
          <h1>
            Mythic <span>Plus</span> Profile<span>.</span>
          </h1>
          <FormContainer>
            <CharacterForm />
          </FormContainer>
        </ContentContainer>
      </BackgroundLayer>
    </WelcomeContainer>
  );
};

export default Welcome;

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.main.primary.light};
  background-image: url(${HeroImg});
  background-position: left;
  border: 1px solid ${colors.main.secondary};

  span {
    color: ${colors.main.secondary};
  }
`;

const BackgroundLayer = styled.div`
  ${flex("column", "center", "flex-start")};
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(7, 3, 14, 0.9), rgba(7, 3, 14, 0.3));
`;

const ContentContainer = styled.div`
  ${flex("column", "center", "center")}
  width: 50%;

  h1 {
    font-size: 3rem;
  }
`;

const FormContainer = styled.div`
  width: 90%;
`;
