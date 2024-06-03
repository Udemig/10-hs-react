import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "./../components/Error";
import CartItem from "../components/CartItem";
const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>
      <div>
        {cart.isLoading ? (
          <Loader />
        ) : cart.error ? (
          <Error />
        ) : cart.data.length === 0 ? (
          <p className="flex flex-col items-center gap-3">
            Sepette herhangi bir ürün yok
            <Link
              className="border p-2 shadow rounded hover:bg-gray-100"
              to={"/"}
            >
              Ürün Ekle
            </Link>
          </p>
        ) : (
          cart.data.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
    </Container>
  );
};

export default Cart;
