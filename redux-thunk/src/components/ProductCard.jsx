import React from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductCard = ({ item, handleAdd }) => {
  console.log(item);
  const { data } = useSelector((store) => store.cart);

  // sepette karttaki elemandan kaç tane var
  const found = data.find((i) => i.productId === item.id);
  console.log(found);
  return (
    <div className="product-card border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="text-gray-500">{item.desc}</p>
        </div>
        <p className="text-lg font-semibold">{item.price}</p>
      </div>
      <div className="relative w-[115px] h-[115px]">
        <img
          src={item.photo}
          className="rounded-md object-cover w-full h-full"
        />
        <button
          onClick={() => handleAdd(item, found)}
          className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 w-8 h-8 grid place-items-center"
        >
          {found ? <span>{found.amount}</span> : <FaPlus className="text-xl" />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
