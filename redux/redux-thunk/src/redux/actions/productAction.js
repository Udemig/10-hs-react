//! Thunk Aksiyonu
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getProducts = (restId) => (dispatch) => {
  // reducera yüklenmenin başladığını bildiriyoruz
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });

  api
    .get(`/products?restaurantId=${restId}`)
    // istek başarılı olursa reducera verileri gönderiyoruz
    .then((res) =>
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    // istek başarısız olursa reducera hata mesajını gönderiyoruz
    .catch((err) =>
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      })
    );
};
