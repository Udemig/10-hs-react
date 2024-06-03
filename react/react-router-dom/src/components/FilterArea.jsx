import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  /*
   * useSearchParams URL'deki arama parametrelerini yönetmemizi sağlar.
   * Çağrılınca dizi içerinde iki değer dönderir:
   * 1.URL'de ki arama parametreleri
   * 2.URL'i güncellemeye yarayan method
   */
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    // sayfayı yenilemeyi engeller
    e.preventDefault();

    // Eklenilecek olan parametrenin değerini belirledik ve aramaTerimi adındaki parametre olarak ekledik
    searchParams.set("aramaTerimi", e.target[0].value);
    // URL'i güncelledik.
    setSearchParams(searchParams);
  };

  // select her değiştiğinde çalışır
  const handleChange = (e) => {
    console.log(e.target.value);
    // Eklenilecek parametreyi belirledik.
    searchParams.set("sırala", e.target.value);
    // URL'i günceledik.
    setSearchParams(searchParams);
  };

  return (
    <div className="mt-3  d-flex justify-content-between align-items-center gap-3">
      <div className="d-flex gap-3 align-items-center">
        <label htmlFor="">Sırala</label>
        <select
          onChange={handleChange}
          defaultValue={"z-a"}
          className="form-select"
        >
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={"Suç ve Ceza"}
          className="form-control"
          type="text"
          placeholder="aratılacak metin..."
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
