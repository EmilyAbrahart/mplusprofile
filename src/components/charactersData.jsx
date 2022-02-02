import React, { useEffect, useState } from "react";
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
  characters: { characterList, characterData },
  dungeons: { dungeonData, colors },
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

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isSpinning, setIsSpinning] = useState(false);

  const stopSpin = () => {
    setIsSpinning(false);
  }

  const animateRefresh = () => {
    setIsSpinning(true);
    setTimeout(stopSpin, 1000);
  };

  const handleClick = () => {
    animateRefresh();
    characterList.forEach((character) => {
      updateCharacterData(character.name, character.server, character.region);
    });
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <CharactersDataContainer>
      <DataContainer>
        <ButtonContainer>
          <Button onClick={() => handleClick()}>
            <img
              src={refresh}
              alt="update"
              className={isSpinning ? "spin" : null}
            />
          </Button>

          <FilterButtonContainer>
            <FilterButton
              active={activeFilter}
              onClick={() => handleFilterClick("ALL")}
            >
              ALL
            </FilterButton>
            <FilterButton
              active={activeFilter}
              onClick={() => handleFilterClick("TYR")}
            >
              TYR
            </FilterButton>
            <FilterButton
              active={activeFilter}
              onClick={() => handleFilterClick("FORT")}
            >
              FORT
            </FilterButton>
          </FilterButtonContainer>
        </ButtonContainer>

        {characterData.length > 0 ? (
          characterData
            .sort(
              (a, b) =>
                b.mythic_plus_scores_by_season[0].scores.all -
                a.mythic_plus_scores_by_season[0].scores.all
            )
            .map((character, index) => (
              <CharacterData
                key={character.name}
                {...character}
                index={index}
                deleteCharacter={deleteCharacter}
                dungeonData={dungeonData}
                colors={colors}
                active={activeFilter}
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
  border: 1px solid black;
  color: #1b1d27;
  margin: 0 1rem;
  width: 7rem;
  height: 1.7rem;
  align-self: flex-start;
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

    &.spin {
      animation: spin 1s linear infinite;
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

const FilterButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
  background-color: ${(props) =>
    props.active === props.children ? "#3bca8b" : "#1b1d27"};
  color: ${(props) =>
    props.active === props.children ? "#1b1d27" : "#3bca8b"};
  border: ${(props) =>
    props.active === props.children ? "1px solid black" : "none"};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FilterButtonContainer = styled(ButtonContainer)`
  justify-content: flex-end;
`;

const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
