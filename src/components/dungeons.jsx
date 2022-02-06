import React from "react";
import styled from "styled-components";
import Dungeon from "./dungeon";
import { colors, flex } from "../styles";

const Dungeons = (props) => {
  const dungeonArray = [
    { key: 1, name: "", dungeon: "" },
    { key: 2, name: "", dungeon: "" },
    { key: 3, name: "", dungeon: "" },
    { key: 4, name: "", dungeon: "" },
    { key: 5, name: "", dungeon: "" },
    { key: 6, name: "", dungeon: "" },
    { key: 7, name: "", dungeon: "" },
    { key: 8, name: "", dungeon: "" },
    { key: 9, name: "", dungeon: "" },
    { key: 10, name: "", dungeon: "" },
  ];
  return (
    <DungeonsContainer active={props.active}>
      {props.dungeonData && props.active === "WEEK"
        ? dungeonArray.map((arrayDungeon, index) => {
            if (props.dungeons.weekly[index]) {
              return (
                <Dungeon
                  key={props.dungeons.weekly[index].clear_time_ms}
                  name={props.dungeons.weekly[index].short_name}
                  dungeon={props.dungeons.weekly[index]}
                />
              );
            } else {
              return (
                <Dungeon
                  key={arrayDungeon.key}
                  name={arrayDungeon.name}
                  dungeon=""
                />
              );
            }
          })
        : props.dungeonData && props.active === "ALL"
        ? props.dungeonData.map((dungeon) => (
            <Dungeon
              key={dungeon.short_name}
              name={dungeon.short_name}
              dungeon={props.dungeons.season.overall.filter(
                (e) => e.short_name === dungeon.short_name
              )}
            />
          ))
        : props.dungeonData && props.active === "TYR"
        ? props.dungeonData.map((dungeon) => (
            <Dungeon
              key={dungeon.short_name}
              name={dungeon.short_name}
              dungeon={props.dungeons.season.tyrannical.filter(
                (e) => e.short_name === dungeon.short_name
              )}
            />
          ))
        : props.dungeonData && props.active === "FORT"
        ? props.dungeonData.map((dungeon) => (
            <Dungeon
              key={dungeon.short_name}
              name={dungeon.short_name}
              dungeon={props.dungeons.season.fortified.filter(
                (e) => e.short_name === dungeon.short_name
              )}
            />
          ))
        : null}
    </DungeonsContainer>
  );
};

export default Dungeons;

const DungeonsContainer = styled.div`
  ${flex("row", "flex-end", "center")};
  color: ${colors.main.light};
  width: 60%;
  @media (max-width:987px) {
        justify-content: center;
      }
  @media (max-width: 749px) {
    width: 100%;
  }
  div.dungeon:nth-child(1),
  div.dungeon:nth-child(4),
  div.dungeon:nth-child(10) {
    border: ${(props) =>
      props.active === "WEEK"
        ? "1px solid " + colors.main.secondary
        : "none"};  
`;
