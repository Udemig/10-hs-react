/*
    ! store oluşturma
    * 1.redux kütüphanesinden "createStore" methodu import edilir.
    * 2.store içerisinde tutulacak olan herbir veri için reducerlar oluşturulur.
    * 3.Oluşturulan reducerlar "combineReducers" ile birleştirilir.
    * 4.Store'a oluşan birleştirilen reducerlar tanıtılır.
*/

import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

//* Birden fazla reducer varsa bunları birleştiririz.
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store oluşturulur
const store = createStore(rootReducer);

export default store;
