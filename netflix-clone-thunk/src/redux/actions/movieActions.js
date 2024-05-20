import { ActionTypes } from "../actionTypes";
import api from "../../utils/api";
// api'dan popüler filmleri alıp reducera aktaran bir asenkron thunk fonksiyonu
export const getPopuler = () => (dispatch) => {
  dispatch({
    type: ActionTypes.MOVIES_LOADING,
  });

  const params = {
    region: "TUR",
  };

  api
    .get("/movie/popular", { params })
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
