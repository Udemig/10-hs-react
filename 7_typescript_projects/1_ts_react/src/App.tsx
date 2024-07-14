import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import fetchCars from "./utils/fetchCars";
import { CarType } from "./types";

const App = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);

  // TODO GELEN DATAYI LİSTELE
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white bg-[rgb(23,23,23)]">
        <Header />

        <Hero />

        <div className="mt-12 padding-x padding-y max-width">
          <div className="home__text-contaniner">
            <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
            <p>Beğenebileceğin arabaları keşfet</p>
          </div>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <Filter />
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
