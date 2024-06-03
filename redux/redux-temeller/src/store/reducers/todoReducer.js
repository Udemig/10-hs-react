/*
import ActionTypes from '../actionTypes';
    ! reducer:
    * state'in nasıl değişeceğine karar verir.
    * reducer normal bir fonksiyondur ve bu fonksiyon iki parametre alır:
    * 1.state:reducerda tutulan verilerin son durumu
    * 2.action:verilerin nasıl değişeceğini ifade eden nesne

    * useReducer'dan farklı olarak initialState'i state parameteresine varsayılan değer olarak veririz
*/

import ActionTypes from "../actionTypes";

const initialState = {
  todos: [],
  isDarkMode: true,
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  // aksiyonun tpyeına göre gerekli güncellemeyi yap
  switch (action.type) {
    // eğer ADD aksiyonu çalışırsa:
    case ActionTypes.ADD:
      return {
        ...state, // statein diğer değerlerini al
        todos: state.todos.concat(action.payload), // statein içerisindeki todos dizisine payloadı ekle
      };
    case ActionTypes.DELETE:
      // diziden idsine göre silinecek elemanı kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtred };
    case ActionTypes.UPDATE:
      // Dizideki eski eleman yerine action.payload ile gelen veriyi
      // koyabilmemiz için diziyi dönüp idlerine göre karşılaştırdık.
      // Idleri eşleşen verileri değiştirdik.
      const updatedArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      // reducerda tutulan todoyu güncelle
      return { ...state, todos: updatedArr };
  }

  return state;
};

export default todoReducer;
