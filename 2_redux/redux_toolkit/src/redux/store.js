import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";
/*
 * configureStore - createStore farkları
 * 1.Veriler reducer'ları otomatik olarak birleştirir.
 */
export default configureStore({
  reducer: { counterReducer, crudReducer },
});
