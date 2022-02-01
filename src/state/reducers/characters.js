import * as types from '../types';

const initialState = {
	characterList: JSON.parse(localStorage.getItem('characters')) || [],
	characterData: [],
	isFetching: false,
	error: ''
};

const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_CHARACTERS_DATA:
		case types.UPDATE_CHARACTER_DATA:
			return {
				...state,
				isFetching: true
			};
		case types.GET_CHARACTERS_SUCCESS:
			return {
				...state,
				characterList: action.payload,
				error: '',
			};
		case types.GET_CHARACTERS_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				characterData: [...state.characterData, action.payload],
				error: '',
			};
		case types.UPDATE_CHARACTER_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				characterData: [
					...state.characterData.filter(
						char => char.name !== action.payload.name
					),
					action.payload
				]
			};
		case types.ADD_CHARACTER_SUCCESS:
			return {
				...state,
				characterList: action.payload
			};

		case types.DELETE_CHARACTER:
			return {
				...state,
				characterList: state.characterList.filter(
					c => c.name.toLowerCase() !== action.payload.toLowerCase()
				),
				characterData: state.characterData.filter(
					c => c.name !== action.payload
				)
			};
		case types.GET_CHARACTERS_DATA_FAILURE:
		case types.UPDATE_CHARACTER_DATA_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default characterReducer;
