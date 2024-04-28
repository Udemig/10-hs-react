import { useState } from "react";

const Counter = () => {
  /*
        * useState dizi içeriinde iki değer dönderir
        * 1.Durumun son haline erişmemizi sağlayacak değişken
        * 2.Durumu değiştirmemizi sağlayan fonksiyon
    
    */

  const [counter, setCounter] = useState(0);

  console.log(counter);

  return (
    <>
      {/* react fragment
       * Kapsayıcı eleman herhangi bir stil almayacaksa boşuna
       * yer kaplamaması için kullanılır. "<></>"
       */}
      <h1 className="text-center mt-3">Sayaç</h1>
      <div className="d-flex justify-content-center mt-4 align-items-center gap-3">
        <button className="btn btn-secondary" onClick={() => setCounter(0)}>
          Sıfırla
        </button>
        <span className="fw-bolder fs-3">{counter}</span>
        <button
          className="btn btn-success"
          onClick={() => setCounter(counter + 5)}
        >
          Arttır
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          Azalt
        </button>
      </div>
    </>
  );
};

export default Counter;
