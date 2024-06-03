import { Link, NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import { ProductContext } from "../context/productContext";
const Header = () => {
  const [categories, setCategories] = useState();

  // category değiştirme fonksiyonu için ürünler contextine abone ol
  const { setSelectedCategory } = useContext(ProductContext);

  useEffect(() => {
    api
      .get("/products/categories")
      // veri gelirse categories stateine aktar
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <Link
          to={"/"}
          className="navbar-brand d-flex gap-3 align-items-center text-light"
        >
          <FaShopify />
          Context Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={"nav-link text-white"} to="/">
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link text-white"} to="/sepet">
                Sepet
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategoriler
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <button className="dropdown-item">Hepsi</button>
                </li>
                {categories?.map((category, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="dropdown-item"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
