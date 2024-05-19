import { ActionTypes } from "../actionTypes";

export const getPopuler = () => (dispatch) => {
  dispatch({
    type: ActionTypes.MOVIES_LOADING,
  });
};
