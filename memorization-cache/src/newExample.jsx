import { useCallback, useState } from "react";
import Display from "./Display";

const NewExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Merhaba");
  /*
                            Sorun
        * Bu bileşen her render edildiğinde bu fonksiyon tekrardan oluşturulur.
        * Tekrardan oluşturulduğunda bellekte yeni yerini alır.
        * Biz bu fonkisonu displaye prop olarak gönderdiğimizde fonksiyon içeriği 
        * aynı olmasına rağmen bellekte referansı farklı olduğundan React.memo bunu
        * farklı bir prop gibi algılar ve display bileşenini gereksiz render eder. 
        const updateCount = () => {
        setCount(count + 1);
        };

                            Çözüm
        * Bileşen her render edildiğinde fonksiyonu yeniden oluşturmak yerine 
        * ilk render sırasında oluşturulan veriyonunu bellekte tutuyoruz ve her
        * render sırasında aynı fonksiyonu bellekten alıyoruz.Bu sayade yeni fonksiyon oluşturmamış 
        * oluyoruz ve bu fonksiyonuda prop olarak gönderdiğimiz react.memo sorun yaşamıyor.
    */

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h2>Sayaç</h2>
      <Display count={count} updateCount={updateCount} />
      <br />
      <br />
      <br />
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <p>{name}</p>
    </div>
  );
};

export default NewExample;
