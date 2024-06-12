/*
    * Action(Eylem / Emir):
    * State'in nasıl değişeceğini ifade ettiğimiz metinlerdir.

    * Dispacth:
    * Actionları bileşen içeriisnden reducera aktarır.


    - Aldığımız Parametler:
    * 1.state'in son hali
    * 2.aldığı action(emir)

    * Reducer fonksiyonu gelen aksiyona göre state'in nasıl değişeceğine karar verir.
    * Aksiyonları bileşenleri içerisinden dispatch methodu yardımıyla reducar'a gönderebiliyoruz.
    * Reducer fonksiyonun return ettiği değer state'in son hali olur.
*/

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  if (action === "SIFIRLA") {
    return { count: 0 };
  }
  if (action === "AZALT") {
    return { count: state.count - 1 };
  }
  if (action === "ARTTIR") {
    return { count: state.count + 1 };
  }
};

export default reducer;
