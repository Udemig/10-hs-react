import { useContext } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { BasketContext } from "../context/basketContext";

const BasketItem = ({ product }) => {
  const { addToBasket, decreaseAmount } = useContext(BasketContext);

  return (
    <div className="d-flex align-items-center gap-3 gap-md-4 bg-black rounded p-3 p-md-4">
      <div className="border bg-white rounded-3">
        <img
          className="object-fit-contain"
          src={product.image}
          width={80}
          height={80}
          alt={product.title}
        />
      </div>

      <div>
        <p className="fw-bold text-truncate">
          {product.title.length > 20
            ? product.title.slice(0, 20) + "...."
            : product.title}
        </p>
        <p>Kategori:{product.category}</p>
        <p>Rating:{product.rating.rate}</p>
      </div>

      <div className="flex-grow-1 d-flex flex-column-reverse flex-md-row align-items-center">
        <div className="bg-dark rounded-5 d-flex align-items-center overflow-hidden ">
          <button onClick={() => decreaseAmount(product.id)}>-</button>
          <span className="px-3">{product.amount}</span>
          <button onClick={() => addToBasket(product)}>+</button>
        </div>
        <h4 className="flex-grow-1">
          ${(product.price * product.amount).toFixed(2)}
        </h4>

        <button className="rounded-2 d-none d-md-block">
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
