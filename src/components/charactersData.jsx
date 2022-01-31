import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CharacterData from "./characterData";
import Welcome from "./welcome";
import {
  getCharacterData,
  updateCharacterData,
  deleteCharacter,
} from "../state/actions/characters";

import refresh from "../img/refresh.svg";

const CharactersData = ({
  characters: { isFetching, characterList, characterData },
  getCharacterData,
  updateCharacterData,
  deleteCharacter,
}) => {
  useEffect(() => {
    characterList.forEach((character) => {
      if (!characterData.some((char) => char.name === character.name)) {
        getCharacterData(character.name, character.server, character.region);
      }
    });
  }, []);

  const handleClick = () => {
    characterList.forEach((character) => {
      updateCharacterData(character.name, character.server, character.region);
    });
  };

  return (
    <CharactersDataContainer>
      <DataContainer>
        <Button onClick={() => handleClick()}>
          <img src={refresh} alt="update" />
        </Button>
        {characterData.length > 0 ? (
          characterData.map((character, index) => (
            <CharacterData
              key={character.name}
              {...character}
              index={index}
              deleteCharacter={deleteCharacter}
            />
          ))
        ) : (
          <Welcome />
        )}
      </DataContainer>
    </CharactersDataContainer>
  );
};

export default connect((state) => state, {
  getCharacterData,
  updateCharacterData,
  deleteCharacter,
})(CharactersData);

const CharactersDataContainer = styled.div`
  width: 1230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

const Button = styled.button`
  background-color: #3bca8b;
  border: none;
  color: #ffffff;
  text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
  border-radius: 25% 25% 0 0;
  margin: 0 1rem;
  width: 7rem;
  height: 1.7rem;
  align-self: flex-end;
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    height: 1.3rem;
    width: 1.3rem;
  }
`;

const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
