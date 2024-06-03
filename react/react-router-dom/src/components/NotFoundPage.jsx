import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  // navigate ile aktarılan hata mesajına eriş
  const loc = useLocation();
  console.log(loc);
  return (
    <div className="container d-flex flex-column align-items-center py-6 gap-4">
      {loc.state && <p className="bg-danger rounded p-2 mt-3">{loc.state}</p>}
      <img
        className="img-fluid rounded w-75"
        src="/public/book-404.gif"
        alt=""
      />
      <div>
        <h1>Aradığın sayfa bulunamadı.</h1>

        <p>
          Böyle bir sayfa bulunamıyor.Anasayfaya dönüp başka bir şey
          arayabilirsin.
        </p>

        <Link className="btn btn-primary" to={"/"}>
          Anasayfaya dön
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
