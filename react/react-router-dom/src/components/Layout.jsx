import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex gap-5 p-4">
      <aside className="d-flex flex-column gap-3 bg-light p-3 rounded">
        <NavLink to={"/ekstra/kategoriler"}>Kategoriler</NavLink>
        <NavLink to={"/ekstra/kampanyalar"}>Kampanyalar</NavLink>
        <NavLink to={"/ekstra/ayarlar"}>Ayarlar</NavLink>
      </aside>

      <div>
        {/*
         * Asıl Sayfa İçeriği:
         * Alt route'un kapsayıcı route içerisinde hangi noktada ekrana basılacağını belirler
         */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
