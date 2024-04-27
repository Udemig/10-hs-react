import { useEffect, useState } from "react";

const FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  //* 1) Bileşenin ekrana basılma olayınız izler
  //   useEffect(() => {
  //     // componentDidMount
  //     console.log("Bileşenin ekrana basılma olayı");
  //   }, []);

  //   //* 2)Belirli bir state değiştiğinde çalışır.
  //   useEffect(() => {
  //     console.log("Sayfa değişti", page);
  // componentDidUpdate
  //     console.log("Inputa veri girildi", name);
  //   }, [page, name]);

  //   //* 3) Bilşenin erkandan gitme olayını izler.
  //   useEffect(() => {
  //     // Bu fonksiyon unmount anında çalışır.
  //     return () => console.log("ekrandan gitti");
  //   }, []);

  //* 4) Hem ekrana gelme hemde ekrandan gitme ve update olayını  izler .
  //   useEffect(() => {
  //     console.log("Ekrana geldi");
  //     console.log(page);
  //     return () => console.log("Ekrandan gitti");
  //   }, [page]);

  //   * 5) Bir statein değişimini izler
  //   useEffect(() => {
  //     console.log("Bileşen render oldu");
  //   });

  //   useEffect(() => {
  //     console.log("Sayfa değişti", page);
  //     // componentDidUpdate;
  //     // console.log("Inputa veri girildi", name);
  //   }, [page]);

  return (
    <>
      <div className="d-flex justify-content-center my-5 align-items-center gap-4">
        <button className="btn btn-danger" onClick={() => setPage(page - 1)}>
          {"< Geri"}
        </button>
        {/* <p>Sayfa:{page}</p> */}
        <button onClick={() => setPage(page + 1)} className="btn btn-primary">
          {"İleri >"}
        </button>
      </div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default FunctionComponent;
