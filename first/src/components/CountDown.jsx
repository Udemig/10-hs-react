import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [number, setNumber] = useState(10);

  useEffect(() => {
    // her saniye bir fonksiyonu çalıştırdık
    const intervalId = setInterval(() => {
      setNumber((prev) => (prev !== 0 ? prev - 1 : 0));
    }, 1000);
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    console.log("tıklanıldı");
    // fonksiyon çalıştığı andaki number değeri 10
    // o yüzden hep aynı number değeri üzerinden işlem yapar
    // setNumber(number + 1); // 10 + 1
    // setNumber(number + 1); // 10 + 1
    // setNumber(number + 1); // 10 + 1

    // parametre olarak bir fonksiyon tanımlarsak o fonksiyon kod satırı çalıştığ andaki en state değeri neyse onu parametre alır
    setNumber((prev) => prev + 1); // 11 + 1
    setNumber((prev) => prev + 1); // 12 + 1
    setNumber((prev) => prev + 1); // 12 + 1
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "90px",
          textAlign: "center",
        }}
      >
        {number}
      </h1>
      <button onClick={handleClick} className="btn btn-primary ">
        Arrtır
      </button>
    </div>
  );
};

export default CountDown;
