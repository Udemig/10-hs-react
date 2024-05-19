import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: false, data: action.payload };
    case ActionTypes.ADD_TO_CART:
      console.log(action);
      return {
        ...state,
        error: false,
        isLoading: false,
        data: state.data.concat(action.payload),
      };
    case ActionTypes.UPDATE_CART:
      const updateArr = state.data.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, data: updateArr };
    case ActionTypes.DELETE_FROM_CART:
      // idsini bildiğimiz elemanı diziden kaldır
      const filtred = state.data.filter((i) => i.id !== action.payload);
      console.log(filtred);
      return { ...state, data: filtred };
    default:
      return state;
  }
};

export default basketReducer;
