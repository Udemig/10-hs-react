import { useEffect, useState } from "react";
import api from "./../utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImgUrl } from "../constants";
import { Link } from "react-router-dom";
const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  //* parametre olarak gelen kategoriye ait filmleri api'den al
  useEffect(() => {
    //* api'ye gönderilecek olan parametreyi belirle
    const params = {
      with_genres: genre.id,
    };

    //* api isteği at ve cevabı movies state'ine aktar
    api
      .get("/discover/movie", { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-10">
      {<h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>}
      <Splide
        options={{
          pagination: false,
          autoWidth: true,
          gap: "10px",
        }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px] h-full cursor-pointer rounded"
                src={baseImgUrl + movie.poster_path}
                alt=""
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
