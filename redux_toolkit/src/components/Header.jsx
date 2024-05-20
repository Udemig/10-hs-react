import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="mb-3 p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link>Toolkit</Link>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="btn btn-primary"
        >
          Tema Değiş
        </button>
      </div>
    </header>
  );
};

export default Header;
