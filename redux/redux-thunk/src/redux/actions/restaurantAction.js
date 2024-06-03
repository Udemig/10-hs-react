import ActionTypes from "../actionTypes";
import api from "../../utils/api";

export const getRestaurants = (restId) => (dispatch) => {
  dispatch({
    type: ActionTypes.REST_LOADING,
  });
  // id alırsak 1 restoranı almazsak bütün restoranlara istek atacağımız url
  const url = restId ? `/restaurants/${restId}` : "/restaurants";

  api
    .get(url)
    .then((res) =>
      dispatch({
        type: ActionTypes.REST_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.REST_ERROR,
        payload: err.message,
      })
    );
};
