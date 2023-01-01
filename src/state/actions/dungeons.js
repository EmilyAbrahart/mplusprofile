import * as types from "../types";
import axios from "axios";

export const getDungeons = () => async (dispatch) => {
  dispatch({ type: types.GET_DUNGEON_DATA });

  try {
    const dungeonData =
      await axios.get(`https://raider.io/api/v1/mythic-plus/static-data?expansion_id=9
        `);
    dispatch({
      type: types.GET_DUNGEON_DATA_SUCCESS,
      payload: dungeonData.data.seasons[0].dungeons,
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_CHARACTER_DATA_FAILURE,
      payload: err.message,
    });
  }
};

export const getColors = () => async (dispatch) => {
  dispatch({ type: types.GET_COLORS });

  try {
    const scoreColors = await axios.get(
      `https://raider.io/api/v1/mythic-plus/score-tiers`
    );
    dispatch({
      type: types.GET_COLORS_SUCCESS,
      payload: scoreColors.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_COLORS_FAILURE,
      payload: err.message,
    });
  }
};
