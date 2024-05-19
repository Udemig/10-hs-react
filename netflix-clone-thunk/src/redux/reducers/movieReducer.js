import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.MOVIES_LOADING:
      console.log(action);
      console.log(state);
      return { ...state, isLoading: true };
  }

  return state;
};

export default movieReducer;
