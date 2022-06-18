import * as types from "../types";
import {slugged} from '../../utlities/slugged';

const initialState = {
  characterList: JSON.parse(localStorage.getItem("characters")) || [],
  characterData: [],
  isFetching: false,
  error: "",
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHARACTER_DATA:
    case types.UPDATE_CHARACTER_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characterList: action.payload,
        error: "",
      };
    case types.GET_CHARACTER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characterData: [
          ...state.characterData,
          {
            name: action.payload.name,
            server: action.payload.realm,
            characterSlug: action.payload.name.toLowerCase()+slugged(action.payload.realm),
            class: action.payload.class,
            spec: action.payload.active_spec_name,
            role: action.payload.active_spec_role,
            avatar: action.payload.thumbnail_url,
            profile: action.payload.profile_url,
            dungeons: {
              scores: action.payload.mythic_plus_scores_by_season[0].segments,
              weekly: action.payload.mythic_plus_weekly_highest_level_runs,
              season: {
                overall: action.payload.mythic_plus_best_runs,
                tyrannical: action.payload.mythic_plus_best_runs
                  .filter((dungeon) => dungeon.affixes[0].name === "Tyrannical")
                  .concat(
                    action.payload.mythic_plus_alternate_runs.filter(
                      (dungeon) => dungeon.affixes[0].name === "Tyrannical"
                    )
                  ),
                fortified: action.payload.mythic_plus_best_runs
                  .filter((dungeon) => dungeon.affixes[0].name === "Fortified")
                  .concat(
                    action.payload.mythic_plus_alternate_runs.filter(
                      (dungeon) => dungeon.affixes[0].name === "Fortified"
                    )
                  ),
              },
            },
          },
        ],
        error: "",
      };
    case types.UPDATE_CHARACTER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        characterData: [
          ...state.characterData.filter(
            (char) => char.name !== action.payload.name
          ),
          {
            name: action.payload.name,
            server: action.payload.realm,
            characterSlug: action.payload.name.toLowerCase()+slugged(action.payload.realm),
            class: action.payload.class,
            spec: action.payload.active_spec_name,
            role: action.payload.active_spec_role,
            avatar: action.payload.thumbnail_url,
            profile: action.payload.profile_url,
            dungeons: {
              scores: action.payload.mythic_plus_scores_by_season[0].segments,
              weekly: action.payload.mythic_plus_weekly_highest_level_runs,
              season: {
                overall: action.payload.mythic_plus_best_runs,
                tyrannical: action.payload.mythic_plus_best_runs
                  .filter((dungeon) => dungeon.affixes[0].name === "Tyrannical")
                  .concat(
                    action.payload.mythic_plus_alternate_runs.filter(
                      (dungeon) => dungeon.affixes[0].name === "Tyrannical"
                    )
                  ),
                fortified: action.payload.mythic_plus_best_runs
                  .filter((dungeon) => dungeon.affixes[0].name === "Fortified")
                  .concat(
                    action.payload.mythic_plus_alternate_runs.filter(
                      (dungeon) => dungeon.affixes[0].name === "Fortified"
                    )
                  ),
              },
            },
          },
        ],
      };
    case types.ADD_CHARACTER_SUCCESS:
      return {
        ...state,
        characterList: action.payload,
      };

    case types.DELETE_CHARACTER:
      return {
        ...state,
        characterList: state.characterList.filter(
          (c) => c.name.toLowerCase()+slugged(c.server) !== action.payload
        ),
        characterData: state.characterData.filter(
          (c) => c.name.toLowerCase()+slugged(c.server) !== action.payload
        ),
      };
    case types.GET_CHARACTER_DATA_FAILURE:
    case types.UPDATE_CHARACTER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
