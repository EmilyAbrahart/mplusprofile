import React from "react";
import styled from "styled-components";
import Dungeon from "./dungeon";
import { colors, flex } from "../styles";

const Dungeons = (props) => {
  return (
    <DungeonsContainer>
      {props.dungeonData && props.active === "ALL"
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
  ${flex("row", "center", "center")};
  color: ${colors.main.light};
`;
