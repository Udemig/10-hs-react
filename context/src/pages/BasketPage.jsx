import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basket, addToBasket } = useContext(BasketContext);
  console.log(basket);
  return (
    <div className="mt-5 pt-5 p-2">
      <h1>SEPET</h1>
      <div className="row g-3">
        <div className="col-lg-8">
          <div>
            {basket.length === 0 ? (
              <div>
                <p>Öncelikle sepete bir ürün ekleyiniz</p>
                <Link to={"/"}>Ürünlere git</Link>
              </div>
            ) : (
              basket.map((product) => (
                <BasketItem key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
        <div className="d-flex flex-column gap-4 col-lg-4 bg-dark p-5">
          <h3>
            Toplam Ürün Sayısı: <span>10</span>
          </h3>
          <h3>
            Toplam Fiyat:<span>$1000</span>
          </h3>
          <form className="d-flex mt-4">
            <input
              type="text"
              placeholder="promosyon kodu"
              className="form-control"
            />
            <button className="btn btn-primary">Uygula</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
