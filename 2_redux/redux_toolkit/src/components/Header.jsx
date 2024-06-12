import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="mb-3 p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link>Toolkit</Link>

        <nav className="d-flex align-items-center gap-3">
          <NavLink className={"text-decoration-none p-2"} to={"/"}>
            Sayaç
          </NavLink>
          <NavLink className={"text-decoration-none p-2"} to={"/crud"}>
            CRUD
          </NavLink>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="btn btn-primary"
          >
            Tema Değiş
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
