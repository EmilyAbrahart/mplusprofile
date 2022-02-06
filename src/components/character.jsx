import React from "react";
import styled from "styled-components";

import Dungeons from "./dungeons";
import { flex, colors } from "../styles";
import { MainButton } from "../styles/components";

const Character = (props) => {
  return (
    <CharacterContainer index={props.index}>
      <CharacterClass>
        <Avatar>
          {props.showDelete ? (
            <DeleteButton onClick={() => props.deleteCharacter(props.name)}>
              X
            </DeleteButton>
          ) : (
            <img src={props.avatar} alt="avatar" />
          )}
        </Avatar>
        <NameContainer>{props.name}</NameContainer>
      </CharacterClass>
      <ScoreContainer color={props.dungeons.scores.all.color}>
        {props.dungeons.scores.all
          ? Math.round(props.dungeons.scores.all.score)
          : null}
      </ScoreContainer>
      <Dungeons
        dungeons={props.dungeons}
        dungeonData={props.dungeonData}
        active={props.active}
      />
    </CharacterContainer>
  );
};

export default Character;

const CharacterContainer = styled.div`
  ${flex("row", "space-between", "center")};
  width: 100%;
  border: 1px solid black;
  margin-bottom: 0.3rem;
  padding: 1rem;
  background-color: ${colors.main.primary.light};
  color: ${colors.main.light};
  text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
  font-weight: 700;

  &:hover {
    background-color: ${colors.main.primary.highlight};
  }
`;

const CharacterClass = styled.div`
  ${flex("row", "flex-start", "center")};
  color: ${colors.main.light};
  font-size: 1.3rem;
`;

// const DeleteButton = styled.button`
//   ${flex("row", "center", "center")};
//   padding: 0.3rem;
//   color: ${colors.main.warning};
//   display: ${(props) => (props.showDelete ? "flex" : "none")};
// `;

const ScoreContainer = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  color: ${(props) => props.color};
`;

const Avatar = styled.div`
  ${flex("row", "center", "center")};
  height: 3rem;
  width: 3rem;
  border: 1px solid ${colors.main.dark};
  margin: 0 1rem 0 0;

  img {
    height: 100%;
    width: 100%;
  }
`;

const NameContainer = styled.div`
  width: 8rem;
  margin-right: 1rem;
`;

const DeleteButton = styled(MainButton)`
  ${flex("row", "center", "center")};
  border: 1px solid ${colors.main.warning};
  height: 2.9rem;
  width: 2rem;
  padding: 0 1.5rem;
  margin: 0;
  background-color: ${colors.main.primary.dark};
  color: ${colors.main.warning};
`;