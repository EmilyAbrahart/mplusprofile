import React, { useState } from "react";
import styled from "styled-components";

import Dungeons from "./dungeons";
import Dungeon from "./dungeon";

import { flex, colors } from "../styles";

const Character = (props) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <CharacterContainer
      index={props.index}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <CharacterClass>
        <Avatar>
          <img src={props.avatar} alt="avatar" />
        </Avatar>
        {props.name}
        <DeleteButton
          onClick={() => props.deleteCharacter(props.name)}
          showDelete={showDelete}
        >
          x
        </DeleteButton>
      </CharacterClass>
      <ScoreContainer color={props.dungeons.scores.all.color}>
        {props.dungeons.scores.all
          ? Math.round(props.dungeons.scores.all.score)
          : null}
      </ScoreContainer>

      <HighestWeeklyDungeon>
        {props.dungeons.weekly[0] ? (
          <Dungeon
            dungeon={props.dungeons.weekly[0]}
            name={props.dungeons.weekly[0].short_name}
          />
        ) : (
          "--"
        )}
      </HighestWeeklyDungeon>
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

const HighestWeeklyDungeon = styled.div`
  padding: 0 1rem;
  text-align: center;
  color: ${colors.main.light};
  text-shadow: none;
`;

const DeleteButton = styled.button`
  ${flex("row", "center", "center")};
  padding: 0.3rem;
  color: ${colors.main.warning};
  display: ${(props) => (props.showDelete ? "flex" : "none")};
`;

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
