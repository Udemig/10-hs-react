import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  /*
    * React bileşenlerindeki statede bir güncelleme olduğunda güncellemenin
    * ekrana yansıması için bileşeni tekrar render eder.
    
    * Sorun: Aşağıdaki hesaplama bileşen her render olduğunda gereksiz yere en baştan tekrar hesaplanıyor.
  
    * Çözüm:useMemo kullanıp yaptığımız hesaplamanın sonucunu cache'e atamk ve her render sırasında
    * yeni sonuç üretmek yerine cachedeki veriye erişip kullanarak gereksiz maliyetli hesaplamaların
    * önüne geçeriz.
  */

  const yeniDizi = useMemo(() => {
    console.log("çalıştı");
    const dizi = new Array(1000).fill("Merhaba Dünya");
    return dizi.map((item) => item + "!");
  }, [count]);
  console.log(yeniDizi);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Sayacı Arttır {count}</button>
    </div>
  );
};

export default UseMemoExample;
