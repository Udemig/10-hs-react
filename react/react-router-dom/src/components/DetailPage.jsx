import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const [book, setBook] = useState(null);
  // useNavigate fonksiyonu çağırıp yönlendirme görevini yapacak olan fonksiyona erişme
  const navigate = useNavigate();

  // 1) URL'deki id parametresini al
  // useParams urle eklenmiş olan pathParamsa erişim sağlar.
  const { id } = useParams();

  // 2) Id'sine eriştiğimiz kitabın bilgilerini API'dan al
  useEffect(() => {
    axios
      .get(`http://localhost:3030/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        // ürünün bilgisi api'den gelmediyse
        // kullanıcıyı 404 sayfasına yönlendir
        // hata mesajını 404 sayfasına aktar
        navigate("/undefined", { state: err.message });
      });
  }, []);
  console.log(book);
  return (
    <>
      {!book && <Loader />}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded shadow"
              src={book.image}
              style={{ maxHeight: "400px" }}
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4">
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label={"Açıklama"} value={book.description} />
              <BookInfo label={"Yıl"} value={book.year} />
              <BookInfo label={"Sayfa Sayısı"} value={book.page} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
//2.component
const BookInfo = ({ label, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{label}</span>
      <span>{value}</span>
    </p>
  );
};
