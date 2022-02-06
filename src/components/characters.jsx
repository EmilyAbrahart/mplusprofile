import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Character from "./character";

import {
  updateCharacterData,
  deleteCharacter,
} from "../state/actions/characters";

import { flex, colors } from "../styles";
import {
  RefreshIcon,
  CircleIcon,
  TyrannicalIcon,
  FortifiedIcon,
} from "../img/icons";

const Characters = ({
  characters: { characterList, characterData },
  dungeons: { dungeonData },
  updateCharacterData,
  deleteCharacter,
}) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isSpinning, setIsSpinning] = useState(false);

  // refresh button animation
  const stopSpin = () => {
    setIsSpinning(false);
  };

  const animateRefresh = () => {
    setIsSpinning(true);
    setTimeout(stopSpin, 1000);
  };

  //click handlers
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
      <ButtonContainer>
        <Button onClick={() => handleClick()}>
          <RefreshIcon className={isSpinning ? "spin" : null} />
        </Button>

        <FilterButtonContainer>
          <FilterButton
            active={activeFilter}
            onClick={() => handleFilterClick("ALL")}
            value="ALL"
          >
            <CircleIcon active={activeFilter} />
          </FilterButton>
          <FilterButton
            active={activeFilter}
            onClick={() => handleFilterClick("TYR")}
            value="TYR"
          >
            <TyrannicalIcon active={activeFilter} />
          </FilterButton>
          <FortifiedFilterButton
            active={activeFilter}
            onClick={() => handleFilterClick("FORT")}
            value="FORT"
          >
            <FortifiedIcon active={activeFilter} />
          </FortifiedFilterButton>
        </FilterButtonContainer>
      </ButtonContainer>
      <DataContainer>
        {characterData
          .sort(
            (a, b) => b.dungeons.scores.all.score - a.dungeons.scores.all.score
          )
          .map((character, index) => (
            <Character
              key={character.name}
              {...character}
              index={index}
              deleteCharacter={deleteCharacter}
              dungeonData={dungeonData}
              active={activeFilter}
            />
          ))}
      </DataContainer>
    </CharactersDataContainer>
  );
};

export default connect((state) => state, {
  updateCharacterData,
  deleteCharacter,
})(Characters);

const CharactersDataContainer = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  ${flex("row", "center", "center")};
  background-color: ${colors.main.secondary};
  border: 1px solid ${colors.main.primary.dark};
  color: ${colors.main.primary.dark};
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  align-self: flex-start;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FilterButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
  background-color: ${(props) =>
    props.active === props.value ? colors.main.secondary : colors.main.primary.dark};

  border: ${(props) =>
    props.active === props.value ? "1px solid black" : "none"};

  svg {
    stroke: ${(props) =>
      props.active === props.value ? colors.main.primary.dark : colors.main.secondary};
  }
`;

const FortifiedFilterButton = styled(FilterButton)`
  svg {
    stroke: none;
    path {
      fill: ${(props) =>
        props.active === props.value ? colors.main.primary.dark : colors.main.secondary};
    }
  }
`;

const ButtonContainer = styled.div`
  ${flex("row", "space-between", "center", "none")};
  width: 100%;
`;

const FilterButtonContainer = styled(ButtonContainer)`
  justify-content: flex-end;
`;

const DataContainer = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  min-height: 80%;
  border: 1px solid ${colors.main.secondary};
`;
