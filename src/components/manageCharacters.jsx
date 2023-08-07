import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { MainButton } from "../styles/components";
import Bin from "../img/icons/bin";
import { colors, flex } from "../styles";

import { deleteCharacter } from "../state/actions/characters";

const ManageCharacters = ({
  characters: { characterList },
  deleteCharacter,
}) => {
  const [showManageCharacters, setShowManageCharacters] = useState(false);
  const toggleShowManageCharacters = () => {
    setShowManageCharacters(!showManageCharacters);
  };

  return (
    <ManageCharactersContainer>
      <CharacterContainer showManageCharacters={showManageCharacters}>
        {characterList.map((c) => (
          <ManageCharactersCharacter key={c.name + c.server}>
            <ManageCharactersDetailsContainer>
              <ManageCharactersName>{c.name}</ManageCharactersName>
              <ManageCharactersServer>
                {c.server.replace("-", " ")}
              </ManageCharactersServer>
            </ManageCharactersDetailsContainer>
            <DeleteCharacterButton
              onClick={() => deleteCharacter(c.name.toLowerCase() + c.server)}
            >
              <Bin />
            </DeleteCharacterButton>
          </ManageCharactersCharacter>
        ))}
      </CharacterContainer>
      <ManageCharactersButton onClick={toggleShowManageCharacters}>
        Manage Characters
      </ManageCharactersButton>
    </ManageCharactersContainer>
  );
};

export default connect((state) => state, { deleteCharacter })(ManageCharacters);

const ManageCharactersContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  ${flex("column", "space-between", "center")}
`;

const CharacterContainer = styled.div`
  width: 100%;
  ${flex("column", "center", "center")};
  display: ${(props) => (props.showManageCharacters ? "block" : "none")};
  background-color: ${colors.main.primary.extra_dark};
`;

const ManageCharactersCharacter = styled.div`
  ${flex("row", "space-between", "center")}
  background-color: ${colors.main.primary.light};
  padding-left: 1rem;
  margin: 1rem;
`;

const ManageCharactersDetailsContainer = styled.div`
  ${flex("column", "center", "flex-start")}
`;

const ManageCharactersName = styled.div`
  font-weight: bold;
  text-transform: capitalize;
`;

const ManageCharactersServer = styled.div`
  text-transform: capitalize;
  color: ${colors.main.secondary};
`;

const ManageCharactersButton = styled(MainButton)`
  width: 100%;
`;
const DeleteCharacterButton = styled.button`
  background-color: ${colors.main.primary.dark};
  padding: 1rem;
`;
