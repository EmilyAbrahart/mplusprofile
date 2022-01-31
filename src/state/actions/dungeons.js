import * as types from '../types';
import axios from 'axios';

export const getDungeons = () => async dispatch => {
    dispatch({type: types.GET_DUNGEON_DATA});

    try {
        const dungeonData = await axios.get(`https://raider.io/api/v1/mythic-plus/static-data?expansion_id=8
        `);
        dispatch({
            type: types.GET_DUNGEON_DATA_SUCCESS,
            payload: dungeonData.data.dungeons
        });
    } catch (err) {
        dispatch({
            type: types.UPDATE_CHARACTER_DATA_FAILURE,
            payload: err.message
        })
    }
};