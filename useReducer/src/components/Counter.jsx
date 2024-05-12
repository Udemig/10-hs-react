import React, { useReducer, useState } from "react";
import counterReducer from "./../reducers/counterReducer";
const Counter = () => {
  // Başlangıç değeri
  const initialState = {
    count: 10,
  };
  /*
    * useReducer:
    * Bir bileşen state yönetimi useState ile birlikte zor bir hale geldiği zaman useReducer'u tercih ederiz.

    - useReducer'ın bizden istediği parametreler:
    * 1.reducer >> state'in nasıl değişeceğine karar veren fonksiyon
    * 2.initialState >> Tutacağımız state'in ilk değeri
    
    - useReducer'ın bize dönderdiği değerler
    * 1.count >> state'in güncel hali
    * 2.dispatch >> state'i güncellemek için kullanacağımız method
  */
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="d-flex gap-4 align-items-center">
      <button className="btn btn-secondary" onClick={() => dispatch("SIFIRLA")}>
        Sıfırla
      </button>
      <button className="btn btn-danger" onClick={() => dispatch("AZALT")}>
        Azalt
      </button>
      <span>{state.count}</span>
      <button className="btn btn-success" onClick={() => dispatch("ARTTIR")}>
        Arttır
      </button>
    </div>
  );
};

export default Counter;
