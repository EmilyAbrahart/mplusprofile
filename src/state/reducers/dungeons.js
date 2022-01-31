import * as types from "../types";

const initialState = {
  dungeonData: "",
  isFetching: false,
  error: "",
};

const dungeonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DUNGEON_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_DUNGEON_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dungeonData: action.payload,
      };
    case types.GET_DUNGEON_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dungeonReducer;
