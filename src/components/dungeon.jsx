import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

import DOS from "../img/dungeons/DOS.webp";
import HOA from "../img/dungeons/HOA.webp";
import MISTS from "../img/dungeons/MISTS.webp";
import NW from "../img/dungeons/NW.webp";
import PF from "../img/dungeons/PF.webp";
import SD from "../img/dungeons/SD.webp";
import SOA from "../img/dungeons/SOA.webp";
import TOP from "../img/dungeons/TOP.webp";
import GMBT from "../img/dungeons/GMBT.webp";
import STRT from "../img/dungeons/STRT.webp";

const Dungeon = ({ name, dungeon }) => {
  return (
    <DungeonContainer
      name={name}
      dungeon={dungeon[0] || dungeon}
      className="dungeon"
    >
      <div className="name">
        <h3>{name ? name : null}</h3>
      </div>
      <div className="level">
        <h3>
          {dungeon[0]
            ? dungeon[0].mythic_level
            : dungeon
            ? dungeon.mythic_level
            : null}
        </h3>
      </div>
    </DungeonContainer>
  );
};

export default Dungeon;

const DungeonContainer = styled.div`
  background-image: ${(props) =>
    props.name === "DOS" && props.dungeon.mythic_level
      ? `url(${DOS})`
      : props.name === "HOA" && props.dungeon.mythic_level
      ? `url(${HOA})`
      : props.name === "MISTS" && props.dungeon.mythic_level
      ? `url(${MISTS})`
      : props.name === "NW" && props.dungeon.mythic_level
      ? `url(${NW})`
      : props.name === "PF" && props.dungeon.mythic_level
      ? `url(${PF})`
      : props.name === "SD" && props.dungeon.mythic_level
      ? `url(${SD})`
      : props.name === "SOA" && props.dungeon.mythic_level
      ? `url(${SOA})`
      : props.name === "TOP" && props.dungeon.mythic_level
      ? `url(${TOP})`
      : props.name === "GMBT" && props.dungeon.mythic_level
      ? `url(${GMBT})`
      : props.name === "STRT" && props.dungeon.mythic_level
      ? `url(${STRT})`
      : props.name === "DOS"
      ? `linear-gradient(black, black),url(${DOS})`
      : props.name === "HOA"
      ? `linear-gradient(black, black),url(${HOA})`
      : props.name === "MISTS"
      ? `linear-gradient(black, black),url(${MISTS})`
      : props.name === "NW"
      ? `linear-gradient(black, black),url(${NW})`
      : props.name === "PF"
      ? `linear-gradient(black, black),url(${PF})`
      : props.name === "SD"
      ? `linear-gradient(black, black),url(${SD})`
      : props.name === "SOA"
      ? `linear-gradient(black, black),url(${SOA})`
      : props.name === "TOP"
      ? `linear-gradient(black, black),url(${TOP})`
      : props.name === "GMBT"
      ? `linear-gradient(black, black),url(${GMBT})`
      : props.name === "STRT"
      ? `linear-gradient(black, black),url(${STRT})`
      : null};
  background: ${(props) =>
    props.dungeon ? null : "linear-gradient(black, black),"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
  border: 1px solid #2b2b2b;
  background-blend-mode: saturation;
  text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
  position: relative;
  text-align: center;
  border: 1px solid black;
  border-radius: 0.3rem;
  @media (max-width: 749px) {
    margin-top: 0.5rem;
  }

  .name {
    position: absolute;
    top: -7px;
    color: white;
    h3 {
      margin: 0;
      font-size: 14px;
    }
  }

  .level {
    background-color: rgba(43, 43, 43, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      color: ${(props) =>
        props.dungeon.num_keystone_upgrades === 0
          ? colors.rarity.poor
          : props.dungeon.mythic_level < 5
          ? colors.rarity.common
          : props.dungeon.mythic_level < 10
          ? colors.rarity.uncommon
          : props.dungeon.mythic_level < 15
          ? colors.rarity.rare
          : props.dungeon.mythic_level < 20
          ? colors.rarity.epic
          : props.dungeon.mythic_level < 25
          ? colors.rarity.legendary
          : colors.rarity.artifact};
      font-size: 1.5rem;
      margin: 0;
    }
  }
`;
