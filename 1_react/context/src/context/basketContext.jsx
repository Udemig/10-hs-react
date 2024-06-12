import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("sepet", []);

  // sepete ürün ekleyen ve sepette ürün varsa onun miktarını arttıran fonksiyon
  const addToBasket = (newProduct) => {
    //* 1) Bu üründen sepeette var mı kontrol et?
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      //* 2) Ürün sepette varsa miktarını 1 arttır.
      // a) Bulunan ürünün miktarını 1 arttır
      const updated = { ...found, amount: found.amount + 1 };
      // b) Sepet dizisindeki eski ürün yerine güncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      // c) State'i güncelle
      setBasket(newBasket);
    } else {
      //* 3) Ürün sepette yoksa ürünü sepete ekle ve miktarını 1 yap
      setBasket(basket.concat({ ...newProduct, amount: 1 }));
      toast.success("Ürün başarı bir şekilde sepete eklendi!");
    }
    console.log(basket);
  };

  const decreaseAmount = (delete_id) => {
    console.log(delete_id);
    console.log("azaltma butonuna tıklanıldı.");
    //* 1) Miktarı azaltılacak olan elemanı sepette bul
    const found = basket.find((i) => i.id === delete_id);
    //* 2) Miktarı 1den fazla ise miktarını 1 azalt
    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      console.log(newBasket);
      setBasket(newBasket);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, decreaseAmount }}>
      {children}
    </BasketContext.Provider>
  );
};
