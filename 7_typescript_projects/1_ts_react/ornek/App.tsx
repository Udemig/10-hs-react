import { ChangeEvent, useRef, useState } from "react";
import Display from "./Display";

const App = () => {
  const [count, setCount] = useState<number>(0);
  // herhangi jsx elemntiinin tipini tanımlarken HTML....Element yapısını kullanırız
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Jsx elementlerinin tipini nasıl hazır olarak kullanıyorsak eventlerde de aynı şekilde hazır tipleri kullanırız
  // Ama sadece event tipi tanımlamak yeterli değil birde  eventin hangi elemente gerçekleştiğini generic olarak göndermeliyiz
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h6 ref={titleRef}>TS REACT</h6>

      <input onChange={handleChange} type="text" />

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>

        <Display count={count} />

        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
