import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./components/DetailPage";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  /*
    ! react router dom
    * Tarayıcıdaki url'e göre ekrana hangi bileşenin basılacağını belirler.
    * react router dom tarayıcıdaki url'e window nesnesi ile erişir.
  
  */
  return (
    <BrowserRouter>
      {/* Routes dışında bütün sayfalar için ortak */}
      <Header />
      {/* Projedeki sayfaları tanımladığımız kapsayıcı */}
      <Routes>
        {/*
         * Route:Projedeki her bir sayfa için tanımlanır.
         * Route'a yol(path) ve o yol için ekrana basılacak olan bileşen(component) verilir.
         */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        {/* Dynamic Route */}
        <Route path="/ürün/:id" element={<DetailPage />} />
        {/* Nested Routes:İç İçe Yollar */}
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>

        {/* Undefined Route: tanımsız bir routea yönlenirse */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
