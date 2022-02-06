import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Character from "./character";

import {
  updateCharacterData,
  deleteCharacter,
} from "../state/actions/characters";

import { flex, colors } from "../styles";
import { Select } from "../styles/components";
import { RefreshIcon, DeleteIcon } from "../img/icons";

const Characters = ({
  characters: { characterList, characterData },
  dungeons: { dungeonData },
  updateCharacterData,
  deleteCharacter,
}) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };

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

  const handleToggleShowDelete = () => {
    setShowDelete(!showDelete);
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
        <DeleteToggleButton
          onClick={() => handleToggleShowDelete()}
          showDelete={showDelete}
        >
          <DeleteIcon />
        </DeleteToggleButton>

        <FilterButtonContainer>
          <FilterSelect onChange={handleFilterChange} defaultValue="ALL">
            <option value="WEEK">Weekly</option>
            <option value="ALL">Overall</option>
            <option value="TYR">Tyrannical</option>
            <option value="FORT">Fortified</option>
          </FilterSelect>
          <FilterButton
            active={activeFilter}
            onClick={() => handleFilterClick("WEEK")}
            value="WEEK"
          >
            Weekly
          </FilterButton>
          <FilterButton
            active={activeFilter}
            onClick={() => handleFilterClick("ALL")}
            value="ALL"
          >
            Overall
          </FilterButton>
          <FilterButton
            active={activeFilter}
            onClick={() => handleFilterClick("TYR")}
            value="TYR"
          >
            Tyrannical
          </FilterButton>
          <FilterButton
            active={activeFilter}
            onClick={() => handleFilterClick("FORT")}
            value="FORT"
          >
            Fortified
          </FilterButton>
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
              showDelete={showDelete}
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
  color: ${colors.main.primary.dark};
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FilterButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
  margin: 0px;
  background-color: ${(props) =>
    props.active === props.value
      ? colors.main.secondary
      : colors.main.primary.dark};

  color: ${(props) =>
    props.active === props.value
      ? colors.main.primary.dark
      : colors.main.secondary};

  @media (max-width: 530px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  ${flex("row", "space-between", "end", "none")};
  width: 100%;
`;

const FilterButtonContainer = styled(ButtonContainer)`
  justify-content: flex-end;
  @media (max-width: 530px) {
    width: 80%;
  }
`;

const DataContainer = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  min-height: 80%;
  border-top: 1px solid ${colors.main.secondary};
`;

const FilterSelect = styled(Select)`
  display: none;
  padding: 0.2rem 1rem;
  margin-bottom: 0;
  width: 9rem;
  font-size: 1rem;
  background-color: ${colors.main.primary.dark};
  color: ${colors.main.secondary};
  &:hover {
    border: none;
  }

  @media (max-width: 530px) {
    display: block;
  }
`;

const DeleteToggleButton = styled(Button)`
  background-color: ${(props) =>
    props.showDelete ? colors.main.secondary : colors.main.primary.dark};
  svg path {
    stroke: ${(props) =>
      props.showDelete ? colors.main.primary.dark : colors.main.secondary};
  }
`;
