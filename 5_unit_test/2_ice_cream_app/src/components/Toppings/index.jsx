import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4090/toppings")
      .then((res) => setData(res.data));
  }, []);

  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };

  return (
    <div>
      <h1>Sos Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">3</span>₺
      </p>
      <h3>
        Soslar Ücreti{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 3}
        </span>
        ₺
      </h3>

      <div className="row p-3 mt-4 gap-3">
        {data.map((i) => (
          <div className="top-card col" key={i.id}>
            <label htmlFor={i.name}>
              <img src={i.imagePath} height={100} />
              <p className="text-nowrap text-center">{i.name}</p>
            </label>

            <input
              onChange={(e) => handleChange(e.target.checked, i)}
              id={i.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
