export const initialState = {
  todos: [],
  isDarkMode: true,
};

const reducer = (state, action) => {
  //   console.log(state.isDarkMode);
  console.log(action);
  // Aksiyonun tipine göre return edilmesi gereken veriye karar veriyoruz.
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, isDarkMode: !state.isDarkMode };
    case "CREATE":
      // statedeki değerleri koru ve todos dizisine action.payload ile gelen veriyi aktar
      return { ...state, todos: state.todos.concat(action.payload) };
    case "DELETE":
      // Aksiyonun payloadı ile gönderilen id dışarısındakileri al
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // statei güncelle
      return { ...state, todos: filtred };
    case "CLEAR":
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export default reducer;
