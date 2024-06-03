/*
  ! Aksiyon Nesnesi Oluşturan Fonksiyon
  * Payload değeri dinamik olacağı için fonksiyonları tercih ettik.
  * Payload değerini parametre olarak aldık.
  * Bu fonksiyonlar her çağrıldığında bir fonksiyon nesnesini döndürüyor.
  * Bileien içerisindeki dispatchlerindeki kodları kısaltıp daha okunabilir yapıyoruz.
*/

import ActionTypes from "../actionTypes";

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});

export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETE,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});
