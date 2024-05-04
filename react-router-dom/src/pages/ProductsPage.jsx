import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams] = useSearchParams();

  // URL'de ki arama parametreleri erişmek için useSearchParamsı kullandık.
  // searchParams.get() metoduna parametre olarak verdiğimiz parametrenin değerini verdi.
  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");

  useEffect(() => {
    const params = {
      _sort: "title",
      _order: order === "z-a" ? "desc" : "asc",
      q: query,
    };
    // API'den kitap verilerini al ve setBooks metodu ile books state'ni güncelle
    axios
      .get("http://localhost:3030/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  return (
    <div className=" flex-grow-1 p-5">
      <h3>{books?.length} kitap bulundu.</h3>

      <FilterArea />
      <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 row-cols-lg-4 g-5 mt-3">
        {books?.map((book) => (
          <div className="col" key={book.id}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
