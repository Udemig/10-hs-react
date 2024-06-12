import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Card from "../components/Card";

const MainPage = () => {
  // Ürünler contextine abone olmak için useContext yapısına oluşturduğumuz ProductContext yapısını göndeririz.
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-5 mt-5">
        {products?.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
