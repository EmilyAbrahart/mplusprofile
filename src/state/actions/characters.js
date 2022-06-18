import * as types from "../types";
import store from "../store";
import axios from "axios";
import {slugged} from '../../utlities/slugged';

export const getCharacters = () => (dispatch) => {
  const characters = JSON.parse(localStorage.getItem("characters"));
  dispatch({
    type: types.GET_CHARACTERS_SUCCESS,
    payload: characters,
  });
};

export const getCharacterData = (name, server, region) => async (dispatch) => {
  dispatch({ type: types.GET_CHARACTER_DATA });

  try {
    const characterData = await axios.get(
      `https://raider.io/api/v1/characters/profile?region=${region}&realm=${server}&name=${name}&fields=mythic_plus_best_runs:all,mythic_plus_alternate_runs:all,mythic_plus_scores_by_season:current,mythic_plus_weekly_highest_level_runs`
    );
    const characters = await store.getState().characters.characterList;
    const character = { name, server, region };
    if (!characters.some((a) => a.name.toLowerCase()+slugged(a.server) === character.name.toLowerCase()+slugged(character.server))) {
      characters.push(character);
    }
    dispatch({ type: types.ADD_CHARACTER_SUCCESS, payload: characters });
    localStorage.setItem("characters", JSON.stringify(characters));
    dispatch({
      type: types.GET_CHARACTER_DATA_SUCCESS,
      payload: characterData.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_CHARACTER_DATA_FAILURE,
      payload: err.message,
    });
  }
};

export const updateCharacterData =
  (name, server, region) => async (dispatch) => {
    dispatch({ type: types.UPDATE_CHARACTER_DATA });

    try {
      const characterData = await axios.get(
        `https://raider.io/api/v1/characters/profile?region=${region}&realm=${server}&name=${name}&fields=mythic_plus_best_runs:all,mythic_plus_alternate_runs:all,mythic_plus_scores_by_season:current,mythic_plus_weekly_highest_level_runs`
      );
      dispatch({
        type: types.UPDATE_CHARACTER_DATA_SUCCESS,
        payload: characterData.data,
      });
    } catch (err) {
      dispatch({
        type: types.UPDATE_CHARACTER_DATA_FAILURE,
        payload: err.message,
      });
    }
  };

export const deleteCharacter = (characterSlug) => (dispatch) => {
  const characters = JSON.parse(localStorage.getItem("characters"));
  const updatedCharacters = JSON.stringify(
    characters.filter((c) => c.name.toLowerCase()+slugged(c.server) !== characterSlug)
  );
  localStorage.setItem("characters", updatedCharacters);

  dispatch({
    type: types.DELETE_CHARACTER,
    payload: characterSlug,
  });
};
