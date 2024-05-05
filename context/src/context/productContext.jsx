import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

/*
    * Context API
    * Uygulamada birden çok bileşenin ihtiyacı olan verileri 
    * bileşenlerden bağımsız bir şekilde konumlanan merkezde yönetmeye yarar.
    
    * Context yapısı içerisinde verilerin state'ini ve 
    * verileri değiştirmeye yarayan fonksiyonları tutabilir.

    * Context, tuttuğumuz statelerin bileşenlere doğrudan aktarım yapabilen state yönetim aracıdır.
*/

//* 1) Context yapısının temelini oluşturur.
export const ProductContext = createContext();
//* 2) Verileri bileşnlere aktaracak olan sağlayıcı ve tutulan verileri tanımlama
export function ProductProvider({ children }) {
  // ürünler verisi
  const [products, setProducts] = useState();
  // gösterilecek kategorinin verisi
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "/products" // bütün ürünler
        : `/products/category/${selectedCategory}`; // bir kategoriye ait ürünler

    // dinamik bir urle api isteği attık
    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  //* 3) Sağlayıcı fonksiyonları mutlaka providerı return etmeli ve App'i sarmalamalı
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
