import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getDungeons } from "../state/actions/dungeons";
import { getCharacterData } from "../state/actions/characters";

import Heading from "./heading";
import Characters from "./characters";
import Welcome from "./welcome";
import ManageCharacters from "./manageCharacters";
import Footer from "./footer";

import { flex } from "../styles";

const Home = ({
  dungeons: { dungeonData },
  characters: { characterList, characterData },
  getDungeons,
  getCharacterData,
}) => {
  // fetch dungeon data
  useEffect(() => {
    if (!dungeonData) {
      getDungeons();
    }
  }, []);

  // fetch character data
  useEffect(() => {
    characterList.forEach((character) => {
      if (
        !characterData.some(
          (char) =>
            char.name.toLowerCase() === character.name.toLowerCase() &&
            char.server.toLowerCase() === character.server.toLowerCase()
        )
      ) {
        getCharacterData(character.name, character.server, character.region);
      }
    });
  }, []);

  return (
    <HomeContainer>
      <Heading />
      <MainContent>
        {characterData.length > 0 ? <Characters /> : <Welcome />}
      </MainContent>
      <ManageCharacters />
      <Footer />
    </HomeContainer>
  );
};

export default connect((state) => state, { getDungeons, getCharacterData })(
  Home
);

const HomeContainer = styled.div`
  ${flex("column", "space-between", "center")};
  width: 100vw;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 470px) {
    padding: 0;
  }
`;

const MainContent = styled.main`
  width: 90vw;
  max-width: 1300px;
  min-height: 80vh;
  margin-top: 1rem;
`;
